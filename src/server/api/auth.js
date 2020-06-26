const express = require('express');
const router = express.Router();
const authService = require("../services/authService");
const path = require('path');
var pathLoginPage = path.basename('/views/loginPage.ejs');
var pathSignUpPage = path.basename('/views/signUpPage.ejs');
require('../utilities/createKnexPGConnection.js');
//getLoginPage
router.get('/loginPage', (req,res) =>{
    res.render(pathLoginPage);
});
//getSignUpPage
router.get('/signUpPage', (req,res) =>{
    res.render(pathSignUpPage);
});
router.post('/login', (req, res) => {
    // Implement authentication of user.
    // authService.login(req, res, ()=>{})
    res.send("Login");
});

router.post('/logout', (req, res) => {
    // Implement authentication of user.
    // authService.logout(req, res, ()=>{})
    res.send("Login");
});

router.post('/signUp', (req, res) => {
    // Implement authentication of user.
    // authService.signUp(req, res, ()=>{})
    const { name , email, contact, agent, password, password2} = req.body;
    let errors = [];

    // check required fields
    if(!name || !email || !contact || !agent || !password || !password2){
        errors.push({ msg : ' Please fill in all the fields'});
    }
    //check password match
    if(password !== password2){
        errors.push({ msg : 'Passwords do not match'});
    }

    //check password length 
    if(password.length < 8){
        errors.push({ msg : 'Password should be atleast six character'});
    }

    if(errors.length > 0){
        res.render(pathSignUpPage, {
            errors,
            name,
            email,
            contact,
            agent,
            password,
            password2
        });
    }else{
        res.send('pass');
        //authservice
    }
    console.log(req.body);
    res.send("Login");
});

router.post('/forgotPassword', (req, res) => {
    // Implement authentication of user.
    // authService.forgotPassword(req, res, ()=>{})
    res.send("Login");
});


module.exports = router;