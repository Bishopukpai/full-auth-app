const express = require('express')
const router = express.Router()
const User = require('./../models/User')
const bcrypt = require('bcrypt')

//signup routes
router.post('/signup', (req, res) =>{
    let {name, email, password, dateOfBirth} = req.body

    name = name.trim()
    email = email.trim()
    password = password.trim()
    dateOfBirth = dateOfBirth.trim()

    if(name == "" || email == "" || password == "" || dateOfBirth == ""){
        res.json({
            status: "FAILED",
            message: "Empty input fields"
        })
    }else if(!/^[a-zA-Z ]*$/.test(name)){
        res.json({
            status: "FAILED",
            message: "Your name must contain only letters"
        })
    }else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
        res.json({
            status: "FAILED",
            message: "Invalid email address"
        })
    }else if(!new Date(dateOfBirth).getTime()){
        res.json({
            status: "FAILED",
            message: "Invalid Date of Birth"
        })
    }else if(password.length < 8) {
        res.json({
            status: "FAILED",
            message: "Password is too short"
        })
    }else{
        // check if the user already exists
        
        User.find({email}).then(result => {
            if (result.length) {
                //If a user already exists
                res.json({
                    status: "FAILED",
                    message: "User already exists"
                })
            } else {
                //password encrption
                const saltRounds = 10
                bcrypt.hash(password, saltRounds).then(hashedPassword => {
                    const newUser = new User({
                        name,
                        email,
                        password:hashedPassword,
                        dateOfBirth
                    })
                    newUser.save().then(result =>{
                        res.json({
                            status: "SUCCESS",
                            message: "Account created successfully",
                            data: result
                        })
                    }).catch(err =>{
                        res.json({
                            status: "FAILED",
                            message: "An error occured while creating user account"
                        })
                    })

                }).catch(err => {
                    res.json({
                        status: "FAILED",
                        message: "An error occured while hashing password"
                    })
                })
                //Try to create a data collection for the user
            }
        }).catch(err => {
            console.log(err)
            res.json({
                status: "FAILED",
                message: "An error occured"
            })
        })
    }
})

//Signin route 
router.post('/signin', (req, res) =>{
    let {email, password} = req.body
    email = email.trim()
    password = password.trim()

    if (email == "" || password == ""){
        res.json({
            status: "FAILED",
            message: "Empty fields"
        })
    } else {
        //check if the user exists
        User.find({email}).then(data => {
            if(data.length){
                const hashedPassword = data[0].password
                bcrypt.compare(password, hashedPassword).then((result )=> {
                    if (result) {
                        res.json({
                            status: "SUCCESS",
                            message: "Signin Successful",
                            data: data
                        })
                    }else{
                        res.json({
                            status: "FAILED",
                            message: "Invalid password entered"
                        })
                    }
                }).catch((err)=> {
                    res.json({
                        status: "FAILED",
                        message: "An error occured while comparing password"
                    })
                })
            } else {
                res.json({
                    status: "FAILED",
                    message: "Invalid credentials"
                })
            }
        }).catch((err) => {
            res.json({
                status: "FAILED",
                message: "An error occured while checking your credentials"
            })
        })
    }
})

module.exports = router