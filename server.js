/**
 * Created by D.Musev on 27.10.2016 г..
 */

// modules
let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let methodOverride = require('method-override')

// consigurations
// let db = require('./config/db')

// port
let port = process.env.PORT || 8081

// connect to our mongoDB database
// (uncomment after you enter in your own credentials in config/db.js)
// mongoose.connect(db.url);

// get data from body parameters and parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extend: true }))

// override the header in the request aka simulate DELETE
app.use(methodOverride('X-HTTP-Method-Override'))

// set static files location /public/img => /img
app.use(express.static(__dirname + '/public'))

// configure our routes
require('./app/routes')(app)

app.listen(port)

console.log('App is listening on port: ' + port)

// exposing app
exports = module.exports = app
