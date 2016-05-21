var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	//id is so can you view all teh answers from a user
	//without indentifying the user
	_place:{
		type:Schema.Types.ObjectId,
		ref: "Place"
	},
	firstName:String,
	lastName:String,
	email:String,
	password:String,
});

var User = mongoose.model("User", UserSchema);
module.exports=User;
