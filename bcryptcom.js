const bcrypt = require("bcryptjs")

const saltRounds = 5;
const password = "mypass123";
bcrypt.genSalt(saltRounds, function (saltError, salt) {
    if (saltError) {
        throw saltError
    } else {
        bcrypt.hash(password, salt, function(hashError, hash) {
            if (hashError) {
                throw hashError
        }  else {
            console.log(hash);
            bcrypt.compare(password, hash).then(function(result) {
                // result == true
                console.log(result);
            });
            }
            //console.log("Inserted!!!")
          })
      }
  })

