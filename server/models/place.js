var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PlaceSchema = new Schema({
	//id is so can you view all teh answers from a user
	//without indentifying the user
	name:String,
	address: String,
	city:String,
	zipCode:Number,
	phoneNumber:String,
	aboutUs:String,
	imgUrl:String,
	_listing:[{type:Schema.Types.ObjectId,
						ref:"Listing"}]
});

var Place = mongoose.model("Place", QuestionSchema);
module.exports=Place;