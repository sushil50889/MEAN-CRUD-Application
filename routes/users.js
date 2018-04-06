var express = require('express');
var users = require('../model/model');
var controllers = require('../config/controller');
var path = require('path');
var multer = require('multer');
var router = express.Router();


/* ADD users */
router.post('/add', function(req, res, next) {
  var user = new users(req.body); 

  controllers.addUser(user, (err, data) => {
      if(err){
            res.json({
                success: false,
                msg: "Something went wrong. Please try again."
            });
      }else{
            res.json({
                success: true,
                msg: "User registered succesfully."
            });
      }
  })
});





//Get all users list
router.get('/userslist', function(req, res, next) {
    controllers.findAllUser({}, (err, data) => {
        if(err){
            res.send({
                success: false,
                msg: "Something went wrong. Please try again."
            });
      }else{
        res.send({
            success: true,
            users: data
            });
        }
    })
});





//delete user
router.delete('/delete/:id', function(req, res, next){

    controllers.delProfilePic(req.params.id);

    controllers.deleteUser(req.params.id, err => {
        if(err){
            res.json({
                success: false,
                msg: "Something wrong. Please try again."
            });
        }else{
            res.json({
                success: true,
                msg: "User deleted successfully."
            });
        }
    })
});





//edit user
router.get('/edit/:id', function(req, res, next){
    controllers.findUserById(req.params.id, (err, userData) => {
        if(err){
            res.json({
                success: false,
                msg: "Something wrong. Please try again."
            });
        }else{
            res.json({
                success: true,
                data: userData
            });
        }
    });
});





//update user
router.put('/update/:id', function(req, res, next){
    var userData = req.body;
    
    controllers.updateUser(req.params.id, userData, (err, updatedData) => {
        if(err){
            res.json({
                success: false,
                msg: "Something wrong. Please try again."
            });
        }else{
            res.json({
                success: true,
                msg: "Successfully updated."
            });
        }
    });
});






//upload profile or avatar route
router.post('/uploadPic/:id', (req, res, next) => {
    controllers.upload(req, res, (err) => {
      if(err){
        res.json({
            success: false,
            msg: err
        });
        console.log(err);
      } else {
        if(req.file == undefined){
            res.json({
                success: false,
                msg: "Sorry! No File Selected."
            });
        }else{
          res.json({
            success: true,
            msg: "Great job! Image uploaded successfully."
          });
        }
      }
    });
  });


module.exports = router;
