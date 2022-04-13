const MongoClient = require('mongodb').MongoClient;

// Connect URL
const url = 'mongodb://trainer:pass@10.200.47.89:27017/admin?authSource=test';

// Connec to MongoDB
MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {
    if (err) {
        return console.log(err);
    }

    // Specify database you want to access
    const db = client.db('sample_training');

    console.log(`MongoDB Connected: ${url}`);
    client.db("sample_training").collection("users").insertOne({
        userName: "Nizam",
        Password: "pass123",
    })
    console.log("Inserted new document!");
});