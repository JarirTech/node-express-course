
//  branch week3 & week4
const express = require("express");

const app = express();
const { products } = require("./data");
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
let {people} = require('./data')
// week4 logger second method
const logger = require('./logger');
// method 1
app.get('/home', logger, (req, res)=>{
    res.send('Logger home page')
})


app.use(logger)
app.get('/about', (req, res)=>{
    res.send('About page')
})

//Get people

app.get('/api/v1/people', (req, res)=>{
    res.status(200).json({success: true, data: people})
})
// post
app.post('/api/v1/people', (req, res)=>{
    const {name} = req.body
    if (!name){

         return res.status(400).json({ success: false, message: "Please provide a name" });
    }
    people.push({ id: people.length + 1, name: req.body.name });
    res.status(201).json({ success: true, name: req.body.name });

})

// router
const peopleRouter = require('./routes/people.js')

app.use("/api/v1/people", peopleRouter)



//week3


//7:
app.get('/api/v1/test', (req,res)=>{
    res.json({ message: "It worked!" });

})

app.get('/api/v1/products', (req, res)=>
{
   res.json(products)
})

/*6:
app.all('*', (req, res)=>{
   res.status(404).send('<h1> Resource not found</h1>')

});*/


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
  console.log(req.query)
  const { search, limit } = req.query
  let filteredProducts = [...products]
 //Filter by search keyword
 if (search) {
    filteredProducts = filteredProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }
 if (limit) {
    filteredProducts = filteredProducts.slice(0, Number(limit))
  }
 if (filteredProducts.length < 1) {
     res.status(200).send('no products matched your search');
    return res.status(200).json({ sucess: true, data: [] })
  }
  res.status(200).json(filteredProducts)
})








app.listen(3000, ()=>{
    console.log("Listening on port 3000...")

})

