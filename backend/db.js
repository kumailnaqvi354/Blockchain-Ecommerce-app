const  mongoose = require ('mongoose');
const { MongoClient } = require('mongodb');


const uri = "mongodb+srv://test:32486566@cluster0.6j0pm.mongodb.net/Cluster0?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
  });
  
  

const paymentSchema = new mongoose.Schema({
    id: String,
    itemId: String,
    paid: Boolean
});

const Payment = mongoose.model('Payment',paymentSchema);

module.exports = {
    Payment
}