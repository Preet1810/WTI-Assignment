const mongoose=require("mongoose");
const MONGO_URL=process.env.MONGO_URL;
module.exports=() => {
    return mongoose.connect(MONGO_URL).then(() => {
        console.log("connected to database");
    }).catch((err) => {
        console.log(err)
    })
}