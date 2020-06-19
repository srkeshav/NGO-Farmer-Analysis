const express = require('express');
const router = express.Router();
const path = require('path');
var pathHomePage = path.basename('/views/homePage.ejs');
router.get('/', (req, res) => {
    res.render(pathHomePage);
});

module.exports = router;