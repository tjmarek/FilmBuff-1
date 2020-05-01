// Dependencies
const mongoose = require("mongoose");
const db = require("../models");

//This file empties the Items & Users collections and inserts the items & users below

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost:27017/moviedatabase",
	{ useNewUrlParser: true }
);

const itemSeed = [
	{
			title: "",
			date: new Date(Date.now()),
			authors: "",
			rating: "",
			description: "",
			poster: "",
			apiId: "",
	},
	{
		title: "",
		date: new Date(Date.now()),
		authors: "",
		rating: "",
		description: "",
		poster: "",
		apiId: "",
	},
];

db.Item.remove({})
	.then(() => db.Item.collection.insertMany(itemSeed))
	.then((data) => {
		console.log(data.result.n + " records inserted!");
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});