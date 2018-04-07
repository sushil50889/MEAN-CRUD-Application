var users = require('../model/model');
const fs = require('fs');
var path = require('path');
var multer = require('multer');

var controller = {};

controller.addUser = (newUser, callback) => {
    newUser.save(callback);
}

controller.findAllUser = callback => {
    users.find(callback);
}

controller.deleteUser = (queryData, callback) => {
    users.findByIdAndRemove(queryData, callback);
}

controller.findUserById = (queryData, callback) => {
    users.findById(queryData, callback);
}

controller.updateUser = (query, data, callback) => {
    users.findByIdAndUpdate(query, data, callback);
}

controller.storage = multer.diskStorage({
    destination: './angular-crud/src/assets/images',
    filename: function(req, file, cb){
      cb(null, file.fieldname + req.params.id + path.extname(file.originalname));
    }
  });

controller.checkFileType = function (file, cb){
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
  
    if (extname && mimetype){
      return cb(null, true);
    }else{
      cb('Sorry!!! Only images are allowed to upload.');
    }
  } 


controller.upload = multer({
    storage: controller.storage,
    limits: {fileSize: 10000000},
    fileFilter: function(req, file, cb){
      controller.checkFileType(file, cb);
    }
  }).single('uploadedProfilePic');


controller.delProfilePic = (id) => {
  controller.findUserById(id, (err, data) => {
    if(err){
      console.log(err);      
    }else{
      // console.log(data.avatar);
      try{
        fs.unlinkSync('./angular-crud/src/assets/images/'+data.avatar);
      }catch(error){
        console.log(error);
      }      
    }
  })
}  



module.exports = controller;