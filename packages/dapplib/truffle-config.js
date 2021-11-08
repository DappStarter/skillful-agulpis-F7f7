require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remain coconut install glory bottom tower'; 
let testAccounts = [
"0xb58b7bdd14b1d798b67a6615fd38192bdc2cce95323845c062e6a9a9cde02fc8",
"0x32b8c223c07d7a22e3f56035f3a1fe3c5cc7c198d3daea26b48994aff3de0bc5",
"0x23ee029bb597ac472d0bfa3ea17b7f1e723e82bc6bf16d0cb2013dd858340eda",
"0x63178d275a583b79a98310fa6d90ab7b473d414a847e52ff2645f8bfb420914a",
"0x913d7dba179e20c3d019aba093cbadb464bc237daedd940cdcdbd9afa7f9ebb2",
"0x3e5498543d68897aea7981b1333fd21507da3723c6587865fe8b501cc5a4a81e",
"0x139ee4ba2f129876240fb4520686e0abef1d1b7294688c439183aaec0d434d74",
"0xa6a5ec43b1d4c269c445bd2c137e8673fff349149a4b59947abf3c5db751db9e",
"0xa89b52983aa87fb6b3b1c88e9df70a17408960d56b10a111b7ebb869e0edb914",
"0x2bad7b96efc8e482c330965e6c3719c86335837d33a2e098e6d90703eacd5814"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

