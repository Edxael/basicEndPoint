const express = require('express')
const app = express()

let items = [
  {
    name: 'computer',
    price: 300,
    image: 'https://i5.walmartimages.com/asr/3826f75b-efeb-4a76-bd3a-735641a4a1c9_1.b84fd4ece51b32016a10c20ef07199cf.jpeg'
  },
  {
    name: 'car',
    price: 3000,
    image: 'https://img.newatlas.com/mazda-vision-coupe-wins-2018-concept-car-of-the-year-4.jpg?auto=format%2Ccompress&ch=Width%2CDPR&fit=crop&h=347&q=60&rect=0%2C106%2C1620%2C912&w=616&s=a40e38fdb6995f043b03589dd2e2bf6e'
  },
  {
    name: 'house',
    price: 300000,
    image: 'https://img.huffingtonpost.com/asset/5a3126821500004e0049b6c9.jpeg?ops=scalefit_720_noupscale'
  },
]

app.use(require('./ExpressFiles/HTTP-Headers'))

app.get('/test', (req, res) => {
  res.json({ data: 'test data' })
})

app.get('/items', (req, res) => {
  res.send(items)
})

app.listen((process.env.PORT || 5000), (err) => {
  if(err){ throw err }
  console.log("server up and running on port 5000")
})