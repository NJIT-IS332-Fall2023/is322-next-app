const CryptoJS = require('crypto-js');

const ts = 1;
const publicKey = "ce70fcf72b6dc907efa903f57e2a0369";
const privateKey = "ab9cc3987b40592174c5fef54d9ae387761c9093";

const concatenatedString = ts + privateKey + publicKey;

export const marvelApiKey = publicKey;
export const marvelHash = CryptoJS.MD5(concatenatedString).toString();


