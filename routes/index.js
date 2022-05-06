var express = require('express');
var router = express.Router();
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./users")


mongoose.connect(
  "https://dashboard.heroku.com/apps/final-assessment-server2"
)

app.listen(3001, ()=> {
  console.log("It is connected")
})

app.get("/getEcommerce",(req, res) =>{
UserModel.find({}, (err, result)=>{
  if(err) {
res.json(err);
  }else{
    res.json(result);
  }
})
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
