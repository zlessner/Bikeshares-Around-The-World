const express = require("express")
const router = express.Router()
const axios = require('axios')
const Bikes = require('../models/Bikes')


//updating API straight from website API

router.get("/", (req, res) => {
  axios.get('http://api.citybik.es/v2/networks')
  .then (results => {
    res.json(results.data)
    console.log(res.data.networks[0])
  })
  .catch((err) => {
    console.log(err)
  })
})


// router.get("/", (req, res) => {
//   console.log('received a request on /')
//   Bikes.find({}).then(picks => {
//   console.log(picks)
//   res.json(picks)
// })
// })


module.exports = router

