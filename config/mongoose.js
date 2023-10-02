//require library
const mongoose = require('mongoose');

//connect to database
async function main() {
    const db = await mongoose.connect('mongodb://127.0.0.1:27017/API', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
}

main()
.then(() => console.log('MongoDB Connected...')) //if connected
.catch(err => console.log(err)); //if error