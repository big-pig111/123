/**
 * 本项目已配置为 BNB Smart Chain Testnet（币安智能链测试网）。
 *
 * 1. 请将 contractConst 替换为你在 BNB 测试网部署的合约地址。
 * 2. chainConst 已设置为 BNB 测试网详细参数。
 * 3. 你可以在 https://thirdweb.com/binance-testnet 获取更多信息。
 * 4. 如需测试币，可访问 https://testnet.bnbchain.org/faucet-smart 领取 tBNB。
 */

/** Change these values to configure the application for your own use. **/

// Your smart contract address (available on the thirdweb dashboard)
// For existing collections: import your existing contracts on the dashboard: https://thirdweb.com/dashboard
export const contractConst = "0x3DF0319A62Fda5A4c932B38801DE78a8c3446639"; // BNB 测试网合约地址

// The name of the chain your contract is deployed to.
// For BNB Smart Chain Testnet, you can use the string below or an object with more details if needed.
export const chainConst = {
  chainId: 97,
  name: "BNB Smart Chain Testnet",
  rpc: ["https://97.rpc.thirdweb.com", "https://data-seed-prebsc-1-s1.bnbchain.org:8545"],
  nativeCurrency: {
    name: "BNB Chain Native Token",
    symbol: "tBNB",
    decimals: 18,
  },
  explorers: [
    { name: "bscscan-testnet", url: "https://testnet.bscscan.com", standard: "EIP3091" },
  ],
  shortName: "bnbt",
  slug: "binance-testnet",
};

// It is IMPORTANT to provide your own API key to use the thirdweb SDK and infrastructure.
// Please ensure that you define the correct domain for your API key from the API settings page.
// You can get one for free at https://thirdweb.com/create-api-key
// Learn more here: https://blog.thirdweb.com/changelog/api-keys-to-access-thirdweb-infra
export const clientIdConst = import.meta.env.VITE_TEMPLATE_CLIENT_ID || "";

// Configure the primary color for buttons and other UI elements
export const primaryColorConst = "blue";

// Choose between "light" and "dark" mode
export const themeConst = "dark";

// Gasless relayer configuration options
export const relayerUrlConst = ""; // OpenZeppelin relayer URL
export const biconomyApiKeyConst = ""; // Biconomy API key
export const biconomyApiIdConst = ""; // Biconomy API ID
