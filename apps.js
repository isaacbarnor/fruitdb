const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
// const uri =
//   "mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&writeConcern=majority";
const uri ="mongodb://localhost:27017";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
async function run() {
  try {
    await client.connect();
    const database = client.db('fruitDB');
    const fruits = database.collection('fruits');

    console.log("Connected successfully");
    // Query for a movie that has the title 'Back to the Future'
    // const query = { title: 'Back to the Future' };
    // const fruit = await fruits.findOne(query);
    // console.log(fruit);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
