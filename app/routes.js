/**
 * Created by D.Musev on 27.10.2016 г..
 */
let User = require('./models/User')

module.exports = (app) => {
    // server routes/authentication/api calls
  app.get('/api/users', (req, res) => {
    User.find((err, users) => {
      if (err) res.send(err)

      res.json(users)
    })
  })

  app.get('*', (req, res) => {
    res.sendfile('./public/views/index.html')
  })
}

