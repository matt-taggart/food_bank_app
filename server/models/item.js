var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
	//id is so can you view all teh answers from a user
	//without indentifying the user
	name:String,
	unit:String,
	category:String,
	pricePerUnit:Number,
	amountOfUnits:Number,
	_listing:{type:Schema.Types.ObjectId,
						ref:"Listing"}
});

var Item = mongoose.model("Item", ItemSchema);
module.exports=Item;
