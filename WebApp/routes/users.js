// Libraries
const express = require("express");
const router = express.Router()

// Routes
//Declaring root directory
router.get("/", (req, res, next) => {
    res.send("User List")
})

router
.route("/:id")
.get((req, res) => {
    console.log(req.user)
    res.send("Get User With ID")
})
.put((req, res) => {
    res.send(`Update User With ID ${req.params.id}`)
})
.delete((req, res) => {
    res.send(`Delete User With ID ${req.params.id}`)
})
.post((req, res) => {
    res.send('Create User')
})


//Return user with matching ID
router.get('/:id', (req, res) => {
    res.send(`Get User With ID ${req.params.id}`) // Gets user with ID of {X}
})

// Update user with ID
router.put("/id:", (req, res) => {
    res.send(`Update User With ID ${req.params.id}`)
})


const users = [{name: "Kyle" }, {name: "Sally" }]
router.param('id', (req, res, next, id) => {
    req.user = users[id]
    next()
})


module.exports = router
