import { describe, expect, test } from 'vitest'
import { countTotalTps } from '@/utils/countTotalTps'
import chainsData from './sampleData/chainsData.json'

describe('test countTotalTps function', () => {
  test('count total tps in non-empty array', () => {
    expect(countTotalTps(chainsData)).toBe(0.0690319639397785)
  })

  test('count total tps in empty array', () => {
    expect(countTotalTps([])).toBe(0)
  })

  test('handle invalid data instead of array', () => {
    // @ts-expect-error testing
    expect(countTotalTps(undefined)).toStrictEqual(0)
    // @ts-expect-error testing
    expect(countTotalTps(null)).toStrictEqual(0)
    // @ts-expect-error testing
    expect(countTotalTps(123)).toStrictEqual(0)
    // @ts-expect-error testing
    expect(countTotalTps('123123')).toStrictEqual(0)
  })
})
