const  mongoose = require ('mongoose');
const { MongoClient } = require('mongodb');
const { dburi } = require('./secret.json');


const uri = dburi;
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