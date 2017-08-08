var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var Schema = mongoose.Schema;

var user_schema = new Schema({
    firstname: String,
    lastname: String,
    username: String,
    password: String
});

user_schema.pre('save', function(next) {
    var user = this;
    bcrypt.genSalt(10, function (err, salt) {
        if (err) {
            return next(err);
        }
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});

var User = mongoose.model("User", user_schema);

// Export User model for mongodb
module.exports.User = User;
