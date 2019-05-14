const mongoose = require('../connection.js')

const BikesSchema = new mongoose.Schema({
  networks: [ {
    company: Array,
    href: String,
    id: String,
    location: {
      city: String,
      country: String,
      latitutde: Number,
      longitude: Number
    },
    name: String
  }
]
}
)

const Bikes = mongoose.model('Bikes', BikesSchema)

module.exports = Bikes

