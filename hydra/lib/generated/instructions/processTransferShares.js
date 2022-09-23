"use strict";
/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProcessTransferSharesInstruction = void 0;
const beet = __importStar(require("@metaplex-foundation/beet"));
const web3 = __importStar(require("@solana/web3.js"));
/**
 * @category Instructions
 * @category ProcessTransferShares
 * @category generated
 */
const processTransferSharesStruct = new beet.BeetArgsStruct([
    ["instructionDiscriminator", beet.uniformFixedSizeArray(beet.u8, 8)],
    ["shares", beet.u64],
], "ProcessTransferSharesInstructionArgs");
const processTransferSharesInstructionDiscriminator = [
    195, 175, 36, 50, 101, 22, 28, 87,
];
/**
 * Creates a _ProcessTransferShares_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category ProcessTransferShares
 * @category generated
 */
function createProcessTransferSharesInstruction(accounts, args) {
    const { authority, fromMember, toMember, fanout, fromMembershipAccount, toMembershipAccount, } = accounts;
    const [data] = processTransferSharesStruct.serialize(Object.assign({ instructionDiscriminator: processTransferSharesInstructionDiscriminator }, args));
    const keys = [
        {
            pubkey: authority,
            isWritable: false,
            isSigner: true,
        },
        {
            pubkey: fromMember,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: toMember,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: fanout,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: fromMembershipAccount,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: toMembershipAccount,
            isWritable: true,
            isSigner: false,
        },
    ];
    const ix = new web3.TransactionInstruction({
        programId: new web3.PublicKey("hyDQ4Nz1eYyegS6JfenyKwKzYxRsCWCriYSAjtzP4Vg"),
        keys,
        data,
    });
    return ix;
}
exports.createProcessTransferSharesInstruction = createProcessTransferSharesInstruction;
//# sourceMappingURL=processTransferShares.js.map