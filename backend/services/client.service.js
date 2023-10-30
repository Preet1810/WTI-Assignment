const { Clients }=require("../models/client");
const BasicService=require("./basic.service");

class clientService extends BasicService {
    constructor() {
        super(Clients)
    }
}

module.exports.clientService=new clientService();