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
exports.createProcessUnstakeInstruction = void 0;
const splToken = __importStar(require("@solana/spl-token"));
const beet = __importStar(require("@metaplex-foundation/beet"));
const web3 = __importStar(require("@solana/web3.js"));
/**
 * @category Instructions
 * @category ProcessUnstake
 * @category generated
 */
const processUnstakeStruct = new beet.BeetArgsStruct([["instructionDiscriminator", beet.uniformFixedSizeArray(beet.u8, 8)]], "ProcessUnstakeInstructionArgs");
const processUnstakeInstructionDiscriminator = [
    217, 160, 136, 174, 149, 62, 79, 133,
];
/**
 * Creates a _ProcessUnstake_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 *
 * @category Instructions
 * @category ProcessUnstake
 * @category generated
 */
function createProcessUnstakeInstruction(accounts) {
    const { member, fanout, membershipVoucher, membershipMint, membershipMintTokenAccount, memberStakeAccount, instructions, } = accounts;
    const [data] = processUnstakeStruct.serialize({
        instructionDiscriminator: processUnstakeInstructionDiscriminator,
    });
    const keys = [
        {
            pubkey: member,
            isWritable: true,
            isSigner: true,
        },
        {
            pubkey: fanout,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: membershipVoucher,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: membershipMint,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: membershipMintTokenAccount,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: memberStakeAccount,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: web3.SystemProgram.programId,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: splToken.TOKEN_PROGRAM_ID,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: instructions,
            isWritable: false,
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
exports.createProcessUnstakeInstruction = createProcessUnstakeInstruction;
//# sourceMappingURL=processUnstake.js.map