import { describe, expect, test } from 'vitest'
import { filterChains } from '@/utils/filterChains'
import chainsData from './sampleData/chainsData.json'

describe('test filterChains function', () => {
  test('filter existing word', () => {
    expect(filterChains(chainsData, 'Polkadot')).toStrictEqual([
      {
        name: 'Assethub Polkadot',
        tps: 0,
        updatedAt: '2023-07-31T06:41:13.000Z',
      },
      {
        name: 'Polkadot',
        tps: 0.0330033004283905,
        updatedAt: '2023-07-31T06:40:00.000Z',
      },
    ])
  })

  test('filter existing word with different case', () => {
    expect(filterChains(chainsData, 'Polkadot')).toStrictEqual([
      {
        name: 'Assethub Polkadot',
        tps: 0,
        updatedAt: '2023-07-31T06:41:13.000Z',
      },
      {
        name: 'Polkadot',
        tps: 0.0330033004283905,
        updatedAt: '2023-07-31T06:40:00.000Z',
      },
    ])
  })

  test('filter part of the word', () => {
    expect(filterChains(chainsData, 'aLEPH')).toStrictEqual([
      {
        name: 'Aleph Zero',
        tps: 0,
        updatedAt: '2023-07-31T06:40:03.000Z',
      },
    ])
  })

  test('handle no search query at all', () => {
    // @ts-expect-error testing
    expect(filterChains(chainsData)).toStrictEqual(chainsData)
  })

  test('handle invalid data instead of array', () => {
    // @ts-expect-error testing
    expect(filterChains(undefined)).toStrictEqual([])
    // @ts-expect-error testing
    expect(filterChains(null)).toStrictEqual([])
    // @ts-expect-error testing
    expect(filterChains(123)).toStrictEqual([])
    // @ts-expect-error testing
    expect(filterChains('123123')).toStrictEqual([])
  })
})
