
const mongoose = require("mongoose");

const uri ="mongodb://localhost:27017";

mongoose.connect(uri+"/fruitsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//Creating a fruitSchema
const fruitSchema = new mongoose.Schema({
  name : String,
  ratings: Number,
  market: String
});

// Creating a model from the Schema
const Fruit = new mongoose.model('Fruit',fruitSchema);
// Using the new Model to create a fruit -- a document in the Fruit collection in the FruitDB //
const fruit = new Fruit({
  name:"Aluguntugui",
  ratings:5,
  market: "Madina"
})

// fruit.save();
//Creating a personSchema
const personSchema = new mongoose.Schema({
  name : String,
  age: Number,
  height: Number,
  partners: Number
});

// Creating a model from the Schema
const Person = new mongoose.model('Person',personSchema);
// Using the new Model to create a fruit -- a document in the Fruit collection in the FruitDB //
const person = new Person({
  name : "Isaac Barnor",
  age: 35,
  height: 5.9,
  partners: 12
})

// fruit.save();
// person.save();
