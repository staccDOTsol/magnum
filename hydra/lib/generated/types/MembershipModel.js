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
exports.membershipModelBeet = exports.MembershipModel = void 0;
const beet = __importStar(require("@metaplex-foundation/beet"));
/**
 * @category enums
 * @category generated
 */
var MembershipModel;
(function (MembershipModel) {
    MembershipModel[MembershipModel["Wallet"] = 0] = "Wallet";
    MembershipModel[MembershipModel["Token"] = 1] = "Token";
    MembershipModel[MembershipModel["NFT"] = 2] = "NFT";
})(MembershipModel = exports.MembershipModel || (exports.MembershipModel = {}));
/**
 * @category userTypes
 * @category generated
 */
exports.membershipModelBeet = beet.fixedScalarEnum(MembershipModel);
//# sourceMappingURL=MembershipModel.js.map