const { connect } = require('../config/connection')
var connection = require('../config/connection');

var UserSchema = connection.Schema({

    name: { type:String },
    email: { type:String },
    password: { type:String },
    avatar: { type:String }
})

module.exports = connection.model("User", UserSchema)
