import mysql, { OkPacket } from 'mysql2/promise'
import { RawChain, Chain, RawTpsEntry } from '@/models'
import { ChainsGrid } from '@/components/ChainsGrid'
import { SearchBox } from '@/components/SearchBox'
import { Header } from '@/layouts/Header'
import { processChainsData } from '@/utils/processChainsData'
import { SortBox } from '@/components/SortBox'
import { Toggle } from '@/components/Toggle'
import { Footer } from '@/layouts/Footer'
import { countTotalTps } from '@/utils/countTotalTps'

export interface ChainRow extends OkPacket, RawChain {}

export interface TpsRow extends OkPacket, RawTpsEntry {}

const getDataFromDb = async (): Promise<{
  chains: Chain[]
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
    const [tpsRows] = await db.execute<TpsRow[]>(
      `SELECT t.chain_name, t.datetime_finish, t.tps 
			FROM ( SELECT chain_name, datetime_finish, tps,
							ROW_NUMBER() OVER (PARTITION BY chain_name ORDER BY datetime_finish DESC) as rn 
					FROM tps 
			) AS t
			where t.rn = 1;`
    )

    const chains = processChainsData(chainRows, tpsRows)
    const totalTps = countTotalTps(chains)

    return { chains, totalTps }
  } catch (e) {
    throw new Error('Error getting chains data from the database.')
  } finally {
    db.end()
  }
}

export const revalidate = 0

/**
 * Main dashboard page with tps metrics for each blockchain
 */
const TpsDashboard = async () => {
  const { chains, totalTps } = await getDataFromDb()

  return (
    <>
      <Header>
        <span className="md:mt-0 md:mb-0 mt-2 mb-4 md:text-lg text-base">
          {`Polkadot Ecosystem Total TPS: ${totalTps.toFixed(2)} tx/s`}
        </span>

        <div className="ml-2 lg:w-auto w-full flex lg:flex-row flex-col items-center lg:justify-start justify-between lg:mt-0 mt-2 lg:space-x-4 space-x-0 lg:space-y-0 space-y-4">
          <Toggle />

          <div className="w-full flex items-center lg:justify-start justify-between lg:space-x-4 space-x-1">
            <SearchBox />

            <SortBox />
          </div>
        </div>
      </Header>

      <main className="container md:my-14 mt-6 mb-6 md:px-0 px-4">
        <ChainsGrid chains={chains} />
      </main>

      <Footer />
    </>
  )
}

export default TpsDashboard
