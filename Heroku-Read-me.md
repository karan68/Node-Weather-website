steps to set up :

1) set up the rsa public key : heroku keys:add
2) create : heroku create "unique name"
3) in the package.json write "start" : "node src/app.js" telling it to start from here
4) change the listening port using
const port = process.env.PORT || 3000
app.listen(port,() => {
    console.log('the server is up on port '+port)
}) //listening the website

5)