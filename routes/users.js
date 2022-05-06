var express = require('express');
var router = express.Router();
const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  email:{
    type: String,
    required: true,
  },
  createdate:{
    type: String,
    required: true,
  },
  lastupdated: {
    type: String,
    required: true,
  },
  userid:{
    type: String,
    required: true,
  },
  transactionhistory: {
    type: String,
    required: true,
  },


});

const UserModel = mongoose.model("", Userschema)


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = UserModel;
