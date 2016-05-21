var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ListingSchema = new Schema({
	//id is so can you view all teh answers from a user
	//without indentifying the user
	date:Date.now,
	_item:[{type:Schema.Types.ObjectId,
						ref:"Item"}],
	_place:[{type:Schema.Types.ObjectId,
						ref:"Place"}]
});

var Listing = mongoose.model("Listing", QuestionSchema);
module.exports=Question