
const mongoose = require("mongoose");

const uri ="mongodb://localhost:27017";

mongoose.connect(uri+"/fruitsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//Creating a fruitSchema
const fruitSchema = new mongoose.Schema({
  name : {
    type: String,
    required: [true, "This will not work. We need a name!!"]
  }
    ,
  ratings: Number,
  market: String
});

// Creating a model from the Schema
const Fruit = new mongoose.model('Fruit',fruitSchema);
// Using the new Model to create a fruit -- a document in the Fruit collection in the FruitDB //
const fruit = new Fruit({
  name:"Peaches",
  ratings:5,
  market: "Madina"
});

const orange = new Fruit({
  name: "orange",
  ratings:6,
  market:"Bukom"
});

const strawberry = new Fruit({
  name: "strawberry",
  ratings:7,
  market:"Apam"
})
// strawberry.save();
// Fruit.insert([orange, pawpaw,fruit],function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Operation to insert successfully completed");
//   }
//
// });
//Creating a personSchema
const personSchema = new mongoose.Schema({
  name : String,
  age: Number,
  height: Number,
  partners: Number,
  favouritefruit: fruitSchema
});


// Creating a model from the Schema
const Person = new mongoose.model('Person',personSchema);
// Using the new Model to create a fruit -- a document in the Fruit collection in the FruitDB //
const person = new Person({
  name : "Mad Mount",
  age: 35,
  height: 5.9,
  partners: 12
  ,favouritefruit: fruit
})



 // person.save();

Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  }else{
    fruits.forEach((i) => {
    console.log(  i.name);
  });
  }
  console.log("\n\n This is intentionally left space \n\n");
});

Person.updateOne({ _id: '60d9ac6966656631a862df97'},{favouritefruit: strawberry,name: "David Copperfield" }, function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Update Successful");
  }
});
Person.find(function(err, people){
  if(err){
    console.log(err);
  }else{
    people.forEach((i) => {
    console.log(i);
  });
  }

})
// Person.deleteOne({ name: "Isaac Barnor" }, function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully deteled")
//   }
// });

mongoose.connection.close;
