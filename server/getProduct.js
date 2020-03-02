const products = require('../node-1-afternoon/products.json')

const getProduct = (req, res) => {
    let newArray = products.filter((element) => {
        return element.id === +req.params.id
    })
    if(newArray.length === 1){
        res.status(200).send(newArray[0])
    }else{
        res.status(500).send('Item is not in list')
    }

}
module.exports = getProduct