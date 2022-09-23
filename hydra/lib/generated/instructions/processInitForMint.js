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
exports.createProcessInitForMintInstruction = void 0;
const beet = __importStar(require("@metaplex-foundation/beet"));
const web3 = __importStar(require("@solana/web3.js"));
/**
 * @category Instructions
 * @category ProcessInitForMint
 * @category generated
 */
const processInitForMintStruct = new beet.BeetArgsStruct([
    ["instructionDiscriminator", beet.uniformFixedSizeArray(beet.u8, 8)],
    ["bumpSeed", beet.u8],
], "ProcessInitForMintInstructionArgs");
const processInitForMintInstructionDiscriminator = [
    140, 150, 232, 195, 93, 219, 35, 170,
];
/**
 * Creates a _ProcessInitForMint_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category ProcessInitForMint
 * @category generated
 */
function createProcessInitForMintInstruction(accounts, args) {
    const { authority, fanout, fanoutForMint, mintHoldingAccount, mint } = accounts;
    const [data] = processInitForMintStruct.serialize(Object.assign({ instructionDiscriminator: processInitForMintInstructionDiscriminator }, args));
    const keys = [
        {
            pubkey: authority,
            isWritable: true,
            isSigner: true,
        },
        {
            pubkey: fanout,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: fanoutForMint,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: mintHoldingAccount,
            isWritable: true,
            isSigner: false,
        },
        {
            pubkey: mint,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: web3.SystemProgram.programId,
            isWritable: false,
            isSigner: false,
        },
        {
            pubkey: web3.SYSVAR_RENT_PUBKEY,
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
exports.createProcessInitForMintInstruction = createProcessInitForMintInstruction;
//# sourceMappingURL=processInitForMint.js.map