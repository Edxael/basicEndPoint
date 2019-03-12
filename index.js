const express = require('express')
const app = express()

app.get('/test', (req, res) => {
  res.send('Uno Here')
})

app.get('/item', (req, res) => {
  res.send({
    name: 'computer',
    price: 300,
    image: 'https://i5.walmartimages.com/asr/3826f75b-efeb-4a76-bd3a-735641a4a1c9_1.b84fd4ece51b32016a10c20ef07199cf.jpeg'
  })
})

app.listen(5000, (err) => {
  if(err){ throw err }
  console.log("server up and running on port 5000")
})