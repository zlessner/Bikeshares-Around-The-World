const Bikes = require('./models/Bikes')
const axios = require('axios')


// clear the database of records using all models


//create databases by seeding API through website API


Bikes.deleteMany({}).then(() => {
  axios.get('http://api.citybik.es/v2/networks')
  .then(response => {
    // console.log(response.data)
    Bikes.create(response.data)
    .then((translations) => {
      console.log(translations)
      process.exit()
    })
  })
  })
  .catch((err) => {
    console.log(err)
  })
