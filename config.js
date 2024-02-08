const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: 'ZEROTWO=kmsRFKBD#CSMW_N13TIMTA3i5fUHIoXqX7XGrNUKCgxtz34QmI2M'
};
