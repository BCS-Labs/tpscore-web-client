import { describe, expect, test } from 'vitest'
import { processChainsData } from '@/utils/processChainsData'
import { ChainRow, TpsRow } from '@/app/page'
import rawChainRows from './sampleData/rawChainRows.json'
import rawTpsRows from './sampleData/rawTpsRows.json'
import processedData from './sampleData/processedData.json'

describe('test processChainsData function', () => {
  test('process valid data', () => {
    expect(
      processChainsData(rawChainRows as ChainRow[], rawTpsRows as TpsRow[])
    ).toStrictEqual(processedData)
  })

  test('process empty data', () => {
    expect(processChainsData([], [])).toStrictEqual([])
  })

  test('handle invalid data instead of arrays', () => {
    // @ts-expect-error testing
    expect(processChainsData(undefined, undefined)).toStrictEqual([])
    // @ts-expect-error testing
    expect(processChainsData(null, null)).toStrictEqual([])
    // @ts-expect-error testing
    expect(processChainsData(123, 123)).toStrictEqual([])
    // @ts-expect-error testing
    expect(processChainsData('123123', '123123')).toStrictEqual([])
  })
})
