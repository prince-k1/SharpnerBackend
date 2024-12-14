const express = require('express');
const router = express.Router();

router.use('/add-product',(req, res, next) => {
    // console.log('in the middleware');
    res.send('<form action = "/product" method = "POST"><input type = "text" name = "title"><button type = "submit">Add Product</form>')
     // next Allows the request to continue to the next middleware in line
})

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
    // res.send()
})

module.exports = router;