const mongoose = require('mongoose')

mongoose.set('strictQuery',false);

const check = mongoose.connect('mongodb://127.0.0.1:27017/todoList',
  {
    useNewUrlParser: true,
    
    useUnifiedTopology: true
  }
).then(()=>{
  console.log("CONNECTION IS SUCCESSFUL")
}).catch((err)=> {
  console.log(`Connection is not established due to ${err}`)
});
