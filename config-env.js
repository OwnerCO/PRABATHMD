const envv2 = require('./config-v2')
var GITHUB_TOKEN;
var BOT_NUMBER;
var SESSION_ID;

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

const username = fs.readFileSync('github_username.txt', 'utf8').trim()
if(process.env.GITHUB_AUTH_TOKEN){
GITHUB_TOKEN = process.env.GITHUB_AUTH_TOKEN
}else{
GITHUB_TOKEN = envv2.GITHUB_AUTH_TOKEN
}
if(process.env.BOT_NUMBER){
BOT_NUMBER = process.env.BOT_NUMBER
}else{
BOT_NUMBER = envv2.BOT_NUMBER
}
if(process.env.SESSION_ID){
SESSION_ID = process.env.SESSION_ID
}else{
SESSION_ID = envv2.SESSION_ID
}




module.exports = {
    SESSION_ID: PRABATH-MD~16cUXRqQ#NqdHhasdji-HMg9KujUTxExRWOJHWsnnLwoTi7gI55c,    
    BOT_NUMBER:  51978195933,
    GITHUB_USERNAME: OwnerCO,
    GITHUB_AUTH_TOKEN: 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,
};
