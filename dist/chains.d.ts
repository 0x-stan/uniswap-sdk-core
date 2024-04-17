export declare enum ChainId {
    MAINNET = 1,
    GOERLI = 5,
    SEPOLIA = 11155111,
    ZKSYNC_ERA = 324,
    ZKSYNC_ERA_SEPOLIA = 300,
    ZKSYNC_ERA_INMEMORY = 260,
    OPTIMISM = 10,
    OPTIMISM_GOERLI = 420,
    OPTIMISM_SEPOLIA = 11155420,
    ARBITRUM_ONE = 42161,
    ARBITRUM_GOERLI = 421613,
    ARBITRUM_SEPOLIA = 421614,
    POLYGON = 137,
    POLYGON_MUMBAI = 80001,
    CELO = 42220,
    CELO_ALFAJORES = 44787,
    GNOSIS = 100,
    BNB = 56,
    AVALANCHE = 43114,
    BASE = 8453
}
export declare const SUPPORTED_CHAINS: readonly [ChainId.MAINNET, ChainId.ZKSYNC_ERA, ChainId.ZKSYNC_ERA_SEPOLIA, ChainId.ZKSYNC_ERA_INMEMORY, ChainId.OPTIMISM, ChainId.OPTIMISM_GOERLI, ChainId.OPTIMISM_SEPOLIA, ChainId.ARBITRUM_ONE, ChainId.ARBITRUM_GOERLI, ChainId.ARBITRUM_SEPOLIA, ChainId.POLYGON, ChainId.POLYGON_MUMBAI, ChainId.GOERLI, ChainId.SEPOLIA, ChainId.CELO_ALFAJORES, ChainId.CELO, ChainId.BNB, ChainId.AVALANCHE, ChainId.BASE];
export declare type SupportedChainsType = typeof SUPPORTED_CHAINS[number];
export declare enum NativeCurrencyName {
    ETHER = "ETH",
    MATIC = "MATIC",
    CELO = "CELO",
    GNOSIS = "XDAI",
    BNB = "BNB",
    AVAX = "AVAX"
}
