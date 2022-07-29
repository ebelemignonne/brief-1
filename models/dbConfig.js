const mongoose = require('mongoose');

mongoose.connect(
  "mongodb+srv://ebele:ebele1342@ebele.irpnd.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log("Mongodb connected");
    else console.log("Connection error :" + err);
  }
)