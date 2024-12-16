const express = require('express');
const router = express.Router();
// const path = require('path');
const rootDir = require('../util/path')
router.use('/add-product',(req, res, next) => {
    // console.log('in the middleware');
    res.sendFile(path.join(rootDir,'Views', 'add-product.html'))
     // next Allows the request to continue to the next middleware in line
})


router.post('/product', (req, res, next) => {
    // console.log(req.body);
    res.redirect('/');
    // res.send()
})



module.exports = router;