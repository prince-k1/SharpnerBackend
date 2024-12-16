// const http = require('http');/not required
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')
const path = require('path');
const rootDir = require('./util/path')
app.use(bodyParser.urlencoded());
// app.use('/add-product',(req, res, next) => {
//     // console.log('in the middleware');
//     res.send('<form action = "/product" method = "POST"><input type = "text" name = "title"><button type = "submit">Add Product</form>')
//      // next Allows the request to continue to the next middleware in line
// })

// app.post('/product', (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/');
//     // res.send()
// })

app.use(adminRoutes);
app.use(shopRoutes);
// app.use(`/`,(req, res, next) => {
//     // console.log('in another middleware');
//     res.send('<h1>Hello from express</h1>')
// })

// const server = http.createServer(app);
// server.listen(3000, () => console.log('hi'));
app.use('/contactus', (req,res,next) => {
    res.sendFile(path.join(rootDir,'views', 'contactUs.html'));
})
app.post('/success', (req, res, next) => {
    res.send('<h1>Form successfuly filled</h1>')
})
app.use((req,res, next) => {
    res.status(404).sendFile(path.join(__dirname,'Views', 'pageNotFound.html'));
})
app.listen(3000);