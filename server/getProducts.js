const products = require('../node-1-afternoon/products.json')

const getProducts = (req, res) => {
    const item = products.filter((element) =>{
        return element.price === +req.query.price
    })
    if(item.length === 1){
        
        res.status(200).send(item[0])
    }else{
          res.status(200).send(products)
    }
}

module.exports = getProducts