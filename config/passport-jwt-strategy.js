const passport=require('passport');
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;


const Doctor=require("../models/User");

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secretkey';


passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {
    try {
        const user = await Doctor.findOne({ id: jwt_payload.id });
        
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
                   }
    } catch (err) {
        return done(err, false);
    }
}));


module.exports=passport;


