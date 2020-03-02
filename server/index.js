const express = require('express');

// const products = require('../node-1-afternoon/products.json')

const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

const app = express();

const port = 3002;

app.get('/api/products', getProducts)

app.get('/api/products/:id', getProduct)

app.get('.api/products?price=price', getProducts)

app.listen(port, () => {
console.log(`Server is listening on ${port}`)
})


