// Libraries
const express= require("express")
const { nextTick } = require("process")
const app = express()
const port = 3000

app.set('view engine', 'ejs')

//Declaring variable to hold value of counter
let connectionNum = -1;

//Increase counter by 1 each time a successful connection happens
app.get('/', (req, res) => {
    connectionNum++
    console.log('--| Connection Successful : ' + connectionNum + ' |--')
    res.status(200)
    res.render('index', {text: 'World'})
})

const userRouter = require("./routes/users")

app.use('/users', userRouter)

function logger(reg, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
