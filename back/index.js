const express = require('express')
const app = express()
const bikesController = require('./db/controllers/bikes')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


//redirects to api/ncaam page when basketball entered in URL
app.use('/bikes', (req,res) => {
	res.redirect('/')
})

app.use('/', bikesController)


// app.set("port", process.env.PORT || 3005)

// app.listen(app.get("port"), () => {
//   console.log(`✅ PORT: ${app.get("port")} 🌟`)
// })


app.listen(4000, () => console.log('They see me rollin...on port 4000...'))
 