"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateWalletPublicKey = void 0;
const ValidateWalletPublicKey = (address) => {
    return /^0x[a-fA-F0-9]{40}$/.test(address);
};
exports.ValidateWalletPublicKey = ValidateWalletPublicKey;
