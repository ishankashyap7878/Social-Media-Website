const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');


// authentication using passport
passport.use(new LocalStrategy({
    //username field is a syntax for storing any unique key if the user schema
    //it is used to identify a unique user    
    usernameField: 'email'
    },
    function(email, password, done){
        //find a user and establish the identity
        //first email is the property and second one is the value
        // find a user and establish the identity
        User.findOne({email: email}, function(err, user)  {
            if (err){
                console.log('Error in finding user --> Passport');
                return done(err);
            }

            if (!user || user.password != password){
                console.log('Invalid Username/Password');
                //null->no error, false->authentication hasn't been done
                return done(null, false);
            }
            //null->no error, user-> user is found so we just pass the user to the serializer
            return done(null, user);
        });
    }


));

//we pass the user too this serializer
// serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user, done){
    //user.id is stored in an encrypted format as the cookie
    done(null, user.id);
});



// deserializing the user from the key in the cookies
passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        if(err){
            console.log('Error in finding user --> Passport');
            return done(err);
        }

        return done(null, user);
    });
});


// check if the user is authenticated
passport.checkAuthentication = function(req, res, next){
    // if the user is signed in, then pass on the request to the next function(controller's action)
    if (req.isAuthenticated()){
        return next();
    }

    //  if the user is not signed in
    return res.redirect('/users/sign-in');
}

passport.setAuthenticatedUser = function(req, res, next){
    if (req.isAuthenticated()){
        // req.user contains the current signed in user from the session cookie and we are just sending this to the locals for the views
        res.locals.user = req.user;
    }

    next();
}

module.exports = passport;