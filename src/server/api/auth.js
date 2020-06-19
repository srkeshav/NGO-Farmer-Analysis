const express = require('express');
const router = express.Router();
const authService = require("../services/authService");
const path = require('path');
var pathLoginPage = path.basename('/views/loginPage.ejs');
var pathSignUpPage = path.basename('/views/signUpPage.ejs');
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
    res.send("Login");
});

router.post('/forgotPassword', (req, res) => {
    // Implement authentication of user.
    // authService.forgotPassword(req, res, ()=>{})
    res.send("Login");
});


module.exports = router;