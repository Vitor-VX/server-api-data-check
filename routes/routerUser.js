const router = require('express').Router();
const { getData } = require('../utils/utils');

router.get('/check-data', (req, res) => {
    // json
    const dataCheck = getData();

    return res.status(200).json({
        success: true,
        message: 'Check-data server',
        data: dataCheck
    });
});

module.exports = router