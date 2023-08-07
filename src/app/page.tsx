import mysql, { OkPacket } from 'mysql2/promise'
import { Chain, ChainData, TpsEntry } from '@/models'
import { ChainsGrid } from '@/components/ChainsGrid'
import { SearchBox } from '@/components/SearchBox'
import { Header } from '@/layouts/Header'
import { processChainsData } from '@/utils'
import { SortBox } from '@/components/SortBox'

export interface ChainRow extends OkPacket, Chain {}

export interface TpsEntryRow extends OkPacket, TpsEntry {}

const getDataFromDb = async (): Promise<{
  chainsData: ChainData[]
  totalTps: number
}> => {
  const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  })

  try {
    const [chainRows] = await db.execute<ChainRow[]>(
      'SELECT * FROM chain_info;'
    )
    const [tpsRows] = await db.execute<TpsEntryRow[]>(
      `SELECT * FROM tps ORDER BY processing_started_at DESC LIMIT ${
        chainRows.length * 2 || 1
      };`
    )

    return processChainsData({ chainRows, tpsRows })
  } catch (e) {
    throw new Error('Error getting chains data from the database.')
  } finally {
    db.end()
  }
}

export const revalidate = 0

type Props = {
  searchParams?: { [key: string]: string | undefined }
}

export default async function TpsDashboard({}: Props) {
  const { chainsData, totalTps } = await getDataFromDb()

  return (
    <>
      <Header>
        <span className="md:mt-0 md:mb-0 mt-2 mb-4 md:text-lg text-base">
          {`Polkadot Ecosystem Total TPS: ${totalTps.toFixed(2)} tx/s`}
        </span>

        <div className="md:w-auto w-full flex items-center md:justify-start justify-between md:space-x-4 space-x-1">
          <SearchBox />

          <SortBox />
        </div>
      </Header>

      <main className="container md:my-14 mt-6 mb-6 md:px-0 px-4">
        <ChainsGrid chains={chainsData} />
      </main>
    </>
  )
}
