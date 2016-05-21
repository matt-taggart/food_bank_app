var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
	//id is so can you view all teh answers from a user
	//without indentifying the user
	name:String,
	quantity:String,
	catagory:String,
	worth:String,
	catagory:String,
	_listing:{type:Schema.Types.ObjectId,
						ref:"Listing"}
});

var Item = mongoose.model("Item", ItemSchema);
module.exports=Question