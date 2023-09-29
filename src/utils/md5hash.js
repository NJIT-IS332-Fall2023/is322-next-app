const CryptoJS = require('crypto-js');

const ts = 1;
const publicKey = "SOME KEY";
const privateKey = "SOME OTHER KEY";

const concatenatedString = ts + privateKey + publicKey;

export const marvelApiKey = publicKey;
export const marvelHash = CryptoJS.MD5(concatenatedString).toString();


