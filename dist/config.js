"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
require("dotenv/config");
exports.config = {
    PORT: process.env.PORT || 8081,
    NODE_ENV: process.env.NODE_ENV,
    // Should use some paid RPC. Used free one for test case
    // Should use some paid RPC. Used free one for test case
    SOLANA_RPC_URL: "https://devnet.helius-rpc.com/?api-key=7b018084-0181-4c17-af0e-799dd86f3b2f",
    SOL_VAULT_WALLET: "J4cxCdTpQdHUeiVUEETTNFXvd51E8QZrDk4cYjRYJTYE",
    SOLANA_PRIVATE: "2k3rfWSwr1DjL6EYFzS9hYSaZLxuJdBYRYomkJQ2XXU6u2tbmBNP7mdCW2GJK76GQzxmr1zkUubaj5VhKF1bSiPC",
    SOL_TOKEN_ADDRESS: "AXA9R2HSPCGx1X3QPZU2RHDiDnbD1sS8XLTcV5PTdw3m",
    VAULT_TOKEN_ADDRESS: "KFEn4Yz6LwDjP2mB5Pm2LnQpYJtFnvPfbv83Td68So1",
    SOL_TOKEN_DECIMAL: 0,
    AIRDROP_AMOUNT: 10, // SOL Token decimal
};
