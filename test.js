const onionv3 = require('./index');

const keys = onionv3.generateKeys();
const v3 = onionv3.generateOnionV3(keys.privateKey);

console.log(v3);