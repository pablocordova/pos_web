var moongose = require('moongose');
var bcrypt = require('bcryptjs');

var Schema = moongose.Schema;

moongose.connect("mongodb://localhost/posdb");

var user_schema = new Schema({
    first_name: String,
    last_name: String,
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

var User = moongose.model("User", user_schema);

module.exports.User = User;