// Introduction to Express Assignment//console.log('Express Tutorial')

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

//6:
//app.all('*', (req, res)=>{
 //   res.status(404).send('<h1> Resource not found</h1>')

//});


app.get('/api/v1/products/:productId', (req, res)=>{
    const productId = parseInt(req.params.productId)
    const reqProduct = products.find(product=> product.id ===productId)

//1: 404 for bad producct id

if (!reqProduct){
   
   return res.status(404).json({ message: "That product was not found."})
}
return res.json(reqProduct)
})


//2: query
app.get('/api/v1/query',  (req, res) => {
  // console.log(req.query)
  const { search, limit } = req.query
  let filteredProducts = [...products]
// Filter by search keyword
  if (search) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }
  if (limit) {
    filteredProducts = filteredProducts.slice(0, Number(limit))
  }
  if (filteredProducts.length < 1) {
    // res.status(200).send('no products matched your search');
    return res.status(200).json({ sucess: true, data: [] })
  }
  res.status(200).json(filteredProducts)
})


app.listen(3000, ()=>{
    console.log("Listening on port 3000...")

})

