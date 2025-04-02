// Introduction to Express Assignment
//console.log('Express Tutorial')

const express = require("express");

const app = express();
const { products } = require("./data");
// static and midlleware
app.use(express.static("./public"));



//7:
app.get('/api/v1/test', (req,res)=>{
    res.json({ message: "It worked!" });

})

app.get('/api/v1/products', (req, res)=>
{
    res.json(products)
})
app.get('/api/v1/products/:productId', (req, res)=>{
    const productId = parseInt(req.params.productId)
    const product = products.find(product=> product.id ===productId)
    res.json(product)
});

//6:
app.all('*', (req, res)=>{
    res.status(404).send('<h1> Resource not found</h1>');
})




app.listen(3000, ()=>{
    console.log("Listening on port 3000...")

})

