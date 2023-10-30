const mongoose=require("mongoose");
const clientSchema=new mongoose.Schema({
    name: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    mobile: {
        type: Number
    },
    project: {
        type: String
    }
})

module.exports.Clients=mongoose.model("Client", clientSchema);