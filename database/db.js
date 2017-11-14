var mongoose = require('mongoose');
var mongoClient = require('mongodb').MongoClient;
mongoose.connect('mongodb://localhost/test', {useMongoClient: true}); //TODO: update test once working
console.log('connection successful')

// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));


var userSchema = mongoose.Schema({
  username: String,
  password: String,
});

var User = mongoose.model('User', UserSchema);

var diarySchema = mongoose.Schema({
  username: String,
  text: String,
  sentiment: String,
});

var Diary = mongoose.model('Diary', DiarySchema);


// var fluffy = new UserDoc({userName: 'fluffy'});
// fluffy.save(function (error, success) {
//   if (error) {
//     console.log('it didnt work db line 33');
//   }
//   console.log('hey Mike it worked :D');
// })


module.exports.UserDoc = UserDoc;
module.exports.DiaryDoc = DiaryDoc;