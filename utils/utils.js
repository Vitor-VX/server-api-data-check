const axios = require('axios');

const getData = async () => {
    try {
        const res = await axios.get('https://timeapi.io/api/Time/current/zone?timeZone=America/Sao_Paulo');

        if (res && res.data) {
            return res.data;
        }

        return null;
    } catch (error) {
        console.log(`Error in getData: ${error.message}`);
        return null;
    }
}

module.exports = {
    getData
}