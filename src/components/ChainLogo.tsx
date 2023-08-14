import { FC } from 'react'

/**
 * Maps chain name to logo and its size
 */
const chainToLogoMapping: Record<
  string,
  { logo: string; text?: string; width?: number }
> = {
  Acala: {
    logo: '/chains/acala-chain.svg',
    width: 66,
  },
  'Ajuna Network': {
    logo: '/chains/ajuna-network-chain.svg',
    width: 66,
  },
  'Aleph Zero': {
    logo: '/chains/aleph-zero-chain.svg',
    width: 100,
  },
  Astar: {
    logo: '/chains/astar-chain.svg',
    width: 75,
  },
  'Assethub Polkadot': {
    logo: '/chains/assethub-polkadot-chain.svg',
    width: 22,
    text: 'Assethub Polkadot',
  },
  'Aventus Network': {
    logo: '/chains/aventus-chain.svg',
    width: 80,
  },
  Bitfrost: {
    logo: '/chains/bitfrost-chain.svg',
    width: 80,
  },
  Bitgreen: {
    logo: '/chains/bitgreen-chain.svg',
    width: 70,
  },
  Centrifuge: {
    logo: '/chains/centrifuge-chain.svg',
    width: 80,
  },
  Clover: {
    logo: '/chains/clover-chain.svg',
    width: 66,
  },
  Collectives: {
    logo: '/chains/collectives-chain.png',
    width: 20,
    text: 'Collectives',
  },
  Polkadot: {
    logo: '/chains/polkadot-chain.svg',
    width: 95,
  },
  'Composable Finance': {
    logo: '/chains/composable-finance-chain.svg',
    width: 20,
    text: 'Composable Finance',
  },
  Crust: {
    logo: '/chains/crust-chain.svg',
    width: 65,
  },
  Darwinia: {
    logo: '/chains/darwinia-chain.png',
    width: 95,
  },
  Efinity: {
    logo: '/chains/efinity-chain.svg',
    width: 100,
  },
  Equilibrium: {
    logo: '/chains/equilibrium-chain.svg',
    width: 90,
  },
  Frequency: {
    logo: '/chains/frequency-chain.svg',
    width: 90,
  },
  'Hashed Network': {
    logo: '/chains/hashed-chain.svg',
    width: 22,
    text: 'Hashed Network',
  },
  HydraDX: {
    logo: '/chains/hydra-dx-chain.svg',
    width: 95,
  },
  Integritee: {
    logo: '/chains/integritee-chain.svg',
    width: 105,
  },
  Interlay: {
    logo: '/chains/interlay-chain.svg',
    width: 95,
  },
  KILT: {
    logo: '/chains/kilt-chain.png',
    width: 50,
  },
  Kapex: {
    logo: '/chains/kapex-chain.svg',
    width: 65,
  },
  'Kylin Network': {
    logo: '/chains/kylin-chain.svg',
    width: 65,
  },
  Litentry: {
    logo: '/chains/litentry-chain.svg',
    width: 85,
  },
  'Manta Network': {
    logo: '/chains/manta-network-chain.svg',
    width: 85,
  },
  Moonbeam: {
    logo: '/chains/moonbeam-chain.png',
    width: 85,
  },
  Nodle: {
    logo: '/chains/nodle-chain.svg',
    width: 85,
  },
  OriginTrail: {
    logo: '/chains/origintrail-chain.svg',
    width: 75,
  },
  'Parallel Finance': {
    logo: '/chains/parallel-chain.svg',
    width: 85,
  },
  Pendalum: {
    logo: '/chains/pendulum-chain.svg',
    width: 95,
  },
  Phala: {
    logo: '/chains/phala-network-chain.svg',
    width: 85,
  },
  Polkadex: {
    logo: '/chains/polkadex-chain.svg',
    width: 95,
  },
  Subsocial: {
    logo: '/chains/subsocial-chain.svg',
    width: 95,
  },
  Unique: {
    logo: '/chains/unique-chain.svg',
    width: 75,
  },
  Zeitgeist: {
    logo: '/chains/zeitgeist-chain.svg',
    width: 115,
  },
  t3rn: {
    logo: '/chains/t3rn-chain.png',
    width: 55,
  },
}

type Props = {
  /**
   * Chain name
   */
  chainName: string
}

/**
 * Renders chain logo or chain name if logo doesn't exist
 */
export const ChainLogo: FC<Props> = ({ chainName }) => {
  const chainInfo = chainToLogoMapping[chainName]

  if (chainInfo) {
    if (chainInfo.text) {
      return (
        <div className="flex items-center space-x-1">
          <img src={chainInfo.logo} alt={chainName} width={chainInfo.width} />
          <span className="text-xs">{chainInfo.text}</span>
        </div>
      )
    }

    return <img src={chainInfo.logo} alt={chainName} width={chainInfo.width} />
  }

  return <span>{chainName}</span>
}
