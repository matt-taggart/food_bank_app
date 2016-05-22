var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PlaceSchema = new Schema({
	//id is so can you view all teh answers from a user
	//without indentifying the user
	name:String,
	address: String,
	city:String,
	zipCode:String,
	phoneNumber:String,
	aboutUs:String,
	latitude:Number,
	longitude:Number,
	imgUrl:String,
	_item:[{type:Schema.Types.ObjectId,
						ref:"Item"}]
});

var Place = mongoose.model("Place", PlaceSchema);
module.exports=Place;
