const express = require('express')
const axios = require('axios')

const clientID = '<your client id>'
const clientSecret = '<your client secret>'

const app = express()
app.use(express.static(__dirname + '/public'))

app.get('/oauth/redirect', (req, res) => {
  axios({
    url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${req
      .query.code}`,
    method: 'post',
    headers: {
      accept: 'application/json'
    }
  }).then((response) => res.redirect(`/welcome.html?access_token=${response.data.access_token}`))
})

app.listen(8080)
