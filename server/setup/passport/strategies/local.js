const findOrCreate = require("mongoose-findorcreate");
const LocalStrategy = require("passport-local").Strategy;

const User = require("../../../Models").User;

function getStrategy() {
    // const localStragey = new LocalStrategy(
    //     function(username, password, done) {
    //         return User.find({ username: username }, function(err, user) {
    //             if (err) { return done(err); }
    //             if (!user) { return done(null, false); }
    //             if (!user.verifyPassword(password)) { return done(null, false); }
    //             return done(null, user);
    //         });
    //     }
    // );
    // return localStragey;

    return User.createStrategy();
}

module.exports = getStrategy;