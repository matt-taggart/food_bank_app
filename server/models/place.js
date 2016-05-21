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
	latitude:Number,
	longitude:Number,
	imgUrl:String,
	_item:[{type:Schema.Types.ObjectId,
						ref:"items"}]
});

var Place = mongoose.model("Place", QuestionSchema);
module.exports=Place;
