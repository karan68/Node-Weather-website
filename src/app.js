const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const app = express() //generating application using express

const port = process.env.PORT || 3000 //setting port

//define paths for express config
const publicDir = path.join(__dirname, '../public/')
const viewPath = path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname,'../templates/partials')

//setup handel bars engine and views location
app.set('view engine' , 'hbs') // setting handeler for dynamic handels
app.set('views', viewPath) //setting the new view path from default i.e. web-servers/views
hbs.registerPartials(partialPath) //setting the new partial path 

//setup static directory to serve
app.use(express.static(publicDir)) //to use the static file




app.get('',(req,res) => {
    res.render('index',{
        title : 'Weather App',
        name:'karan yadav'
    }) //render our views
})
app.get('/about',(req,res) => { //routing path i.r. you route here when about is given on the address bar
    res.render('about',{      //rendering the about page
        title : 'About',
        name:'karan yadav'
    }) //render our views
})
app.get('/help',(req,res) => {
    res.render('help',{
        message : 'this page has helpful contents',
        title:'help',
        name:'karan yadav'
    }) //render our views
})
app.get('/weather',(req,res) => {
    // res.render('weather',{
    //     message : 'Get the weather details ',
    //     title:'weather',
    //     name:'karan yadav'
    // }) //render our views
    if(!req.query.address){
        return res.send({
            error:'you must provide an address'
        })
    }
    geocode(req.query.address,(error,{latitude,longitude,location} = {}) => {
        if(error){
            return res.send({error})
        }
        forecast(latitude,longitude,(error,forecastData) => {
            if(error){
                return res.send({error})
            }
            res.send({
                forecast:forecastData,
                location,
                address:req.query.address
            })
        })
    })

})
  
  
    //render our views
    // if(!req.query.address){
    //     //return is used to stop the finction right there as no term was given and return it
    //     return res.send({
    //         error : 'you must provide a search term'
    //     })
    // }
    //req.query.search is to get the parameter passed on the url
    // console.log(req.query.search)
    

// app.get('/products',(req,res) => {
//     if(!req.query.search){
//         //return is used to stop the finction right there as no term was given and return
//         return res.send({
//             error : 'you must provide a search term'
//         })
//     }
//     //req.query.search is to get the parameter passed on the url
//     console.log(req.query.search)
//     res.send({
//         products : []
//     })
// })

app.get('/help/*',(req,res) =>{
    res.render('404',{
        message : 'Help article not found',
        title:'404',
        name:'karan yadav'
    })
})

//the error page must come last as this the thing we don't want the js to serch first
//, we want it to be searched after all the essentials have been checked
app.get('*',(req,res) => { //'*' means match anything that hasn't been listed above
    res.render('404',{
        message : 'The page you are searching is not found',
        title:'404',
        name:'karan yadav'
    })
})
app.listen(port,() => {
    console.log('the server is up on port '+port)
}) //listening the website




//----------------------------xxx other works ----------------------------------------

// console.log(path.join(__dirname, '../public/')) //path to any directory or file using path modeule
// console.log(__dirname) //path to the directory
// console.log(__filename) // path to the file 

/*this helps to know what the server would do when someone tries to get something specific,
 example a website name app.com, now you can also visit app.com/about or app.com/help for other work , and this what 
 get() gets you.
 */



// app.get('',(req, res ) =>{ //req = request, res = responce
//     res.send('<h1>Weather</h1>')
// })




// app.get('/help',(req,res) => {
//     res.send([{
//         name:'karan',
//         age:22
// },
// {
//     name:'yadav',
//     age:21
// }])
// })
// app.get('/about',(req,res) => {
//     res.send('<h1>About</h1>')
// })


