import { describe, expect, test } from 'vitest'
import { sortChains } from '../utils/sortChains'
import chainsData from './sampleData/chainsData.json'
import alphabeticallySortedChainsData from './sampleData/alphabeticallySortedChainsData.json'
import tpsAscSortedChainsData from './sampleData/tpsAscSortedChainData.json'
import tpsDescSortedChainsData from './sampleData/tpsDescSortedChainsData.json'

describe('test sortChains function', () => {
  test('sort non-empty array alphabetically', () => {
    expect(sortChains(chainsData, 'alphabetically')).toStrictEqual(
      alphabeticallySortedChainsData
    )
  })

  test('sort non-empty array from lowest tps to highest', () => {
    expect(sortChains(chainsData, 'tps-asc')).toStrictEqual(
      tpsAscSortedChainsData
    )
  })

  test('sort non-empty array from highest tps to lowest', () => {
    expect(sortChains(chainsData, 'tps-desc')).toStrictEqual(
      tpsDescSortedChainsData
    )
  })

  test('handle empty array in all 3 modes', () => {
    expect(sortChains([], 'alphabetically')).toStrictEqual([])
    expect(sortChains([], 'tps-asc')).toStrictEqual([])
    expect(sortChains([], 'tps-desc')).toStrictEqual([])
  })

  test('handle invalid data instead of array', () => {
    // @ts-expect-error testing
    expect(sortChains(undefined, 'alphabetically')).toStrictEqual([])
    // @ts-expect-error testing
    expect(sortChains(null, 'tps-asc')).toStrictEqual([])
    // @ts-expect-error testing
    expect(sortChains(123, 'tps-desc')).toStrictEqual([])
    // @ts-expect-error testing
    expect(sortChains('123123', 'tps-desc')).toStrictEqual([])
  })

  test('handle invalid sorting mode', () => {
    // @ts-expect-error testing
    expect(sortChains(chainsData)).toStrictEqual(chainsData)
    // @ts-expect-error testing
    expect(sortChains(chainsData, 'dsaf')).toStrictEqual(chainsData)
  })
})
