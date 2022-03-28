
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.can3v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const { faker } = require ('@faker-js/faker')
const bcrypt = require("bcryptjs")
const fullName = faker.name.findName();
const cardNum = faker.finance.creditCardNumber();
const btcAdd = faker.finance.bitcoinAddress();
const ethAdd = faker.finance.ethereumAddress();
const transaction = faker.finance.amount();

client.connect(err => {
  if (err) {
    console.log(err.message)
    return
  }
  console.log('Connected to MongoDB');

  const saltRounds = 10;
  const username = faker.internet.userName();
  const password = faker.internet.password();
  bcrypt.genSalt(saltRounds, function (saltError, salt) {
      if (saltError) {
          throw saltError
      } else {
          bcrypt.hash(password, salt, function(hashError, hash) {
              if (hashError) {
                  throw hashError
              }  else {
                  //console.log(hash);
                  client.db("sample_training").collection("users").insertOne({
                      userName: username,
                      Password: hash,
                      fullName: fullName,
                      CreditCardNumber: cardNum,
                      btcAddress: btcAdd,
                      ethAddress: ethAdd,
                      Balance: transaction
                    });
              }
              console.log("Inserted!!!")
          })
      }
  })
 
});
