//  les routes 
const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()
const User = require("../models/user")

// get all users
router.get('/', async (req, res)=>{
    try {
        items = await User.find()
        //res.json(items)
        res.render("i", {items})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})


//add new user
router.post('/', async (req, res)=>{
    const user = new User({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email
    })
    try {
        const addedUser = await user.save()
        res.status(201).json(addedUser)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

router.put('/:id', async (req, res)=>{
    try
    {
        const user = await User.findById(new mongoose.Types.ObjectId(req.params.id))
        if (user == null) {
            return res.status(404).json({message: "Cannot find user"})
        }
        if (req.body.name != null) {
            user.name = req.body.name
        }
        if (req.body.age != null) {
            user.age = req.body.age
        }
        if (req.body.email != null) {
            user.email = req.body.email
        }
        const updatedUser = await user.save()
        res.status(201).json(updatedUser)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

router.delete('/:id', async (req, res) => {
    try{
        const user = await User.findById(new mongoose.Types.ObjectId(req.params.id))
        if (user == null) {
            return res.status(404).json({message: "Cannot find user"})
        }
        await ruser.deleteOne()
        res.json({message: "the user is deleted"})
    } catch (err) { 
        res.status(500).json({message: err.message})
    }
})
module.exports = router;