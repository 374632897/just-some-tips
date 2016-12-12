const crypto = require('crypto');
const cert = crypto.Certificate();

const secret = 'abcdfg';
const hash = crypto.createHmac('sha256', secret).update('My name is Jason').digest('hex');
console.log(hash);
const challenge = cert.exportChallenge(Buffer.from('Jason'));
const publicKey = cert.exportPublicKey('Jason');
console.log(publicKey)
console.log(challenge)
// console.log(challenge.toString('utf-8'));
