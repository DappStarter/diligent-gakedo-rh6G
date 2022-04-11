require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remain umbrella hidden clinic bridge genius'; 
let testAccounts = [
"0xbc725aebf4add9d4314d7e9c60c8d748eddd8d18b1d4e719649c7f0037099f97",
"0x72ec68cbeb9ca8d69f3b0eb0b52f5beca404d5145f6f4561a0272c3a815e1fff",
"0xd80d5c343e2ddfe2191c927720df5de9cc2e952ac8f89cce16e20196667837e8",
"0xb71263d39f6113b60ead4b232ab0b5a44e3d3f926e184ccc9bb8e08c9c4816fc",
"0x62ba6dee0391eba72cfdf492b770785ead2820dc347f978a71b50706ab030df4",
"0xdf7ab3a17de5ae414b011a8c18197da1362ec711e3c47bf514cbb3b5fd9c7300",
"0x74596cbd4e573eace07e0dfccb8d0c0c5b5865e5d376180a1dffb07e12ef765c",
"0x7eafba5cc0a37065eeca07a93b822846c98ba6adf0070ee0fb731587d13b5e06",
"0x02acbd915f46c8bf3f41ec6c5ba4a27e2496f073da46382e106995923b941b8a",
"0x62650255d7a32fe7ca87b6c6a7b94bc46722a7007d267463f6127a9be25fad0d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

