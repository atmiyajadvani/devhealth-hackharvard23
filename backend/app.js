const express = require('express');
const http = require('http');
const {default: Terra} = require("terra-api");


const terra = new Terra("devhealth-testing-YQLSEBodYU", "SRMnRszM3tcn4_8t-Z7FLPRJUvA8w0Bg", "some secret")
app = express()
server = http.createServer(app);

app.get('/', async function (req, res) {
  const resp = await terra.generateWidgetSession({
    referenceID : "HelloHarvard--", 
    language: "en",
    authSuccessRedirectUrl: "http://localhost:8000/auth",
    authFailureRedirectUrl: "http://localhost:8000/auth" });
  res.redirect(200, resp.url);
});

app.get('/world.html', function (req, res) {
  res.send('Hello World');
});

/*
apple login authentication
-login success: contain code, id_token, state, user
-use user email
->if we find the user, then log in
->not find the user, then sign in
-login fail: error state
*/
//handle the authorization response
app.get('/auth', function(req, res){
  // let result = 
  console.log(req.url)
});

//delete user account

//update user info

//login & authentication

//get data from TERRA API







server.listen(8000, function () {
  console.log('Express server listening on port ' + server.address().port);
});
