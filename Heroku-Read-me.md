steps to set up :

1) set up the rsa public key : heroku keys:add
2) create : heroku create "unique name"
3) in the package.json write "start" : "node src/app.js" telling it to start from here
4) change the listening port using
const port = process.env.PORT || 3000
app.listen(port,() => {
    console.log('the server is up on port '+port)
}) //listening the website

5)push code to git : git push heroku main
6)voila done



---------------------------------xxxx---------------------
add feature and deploy
1) push it to git hub ist, using the commands, you can use git-read-me for help
2)git push heroku main - to push to heroku.