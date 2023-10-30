class BasicService {
    constructor(model) {
        this.model=model;
    }
    create=(body) => {
        return this.model.create({ ...body });
    }
    findOne=(filter) => {
        return this.model.findOne({ ...filter });
    }
    findMany=(filter) => {
        return this.model.find({ ...filter });
    }
    find=() => {
        return this.model.find();
    }
    findById=(id) => {
        return this.model.findById(id);
    }
    findByIdAndUpdate=(id, body) => {
        return this.model.findByIdAndUpdate(id, { ...body });
    }
    findByIdAndDelete=(id) => {
        return this.model.findByIdAndDelete(id);
    }
    insertMany=(body) => {
        return this.model.insertMany(body);
    }
    deleteMany=(filter) => {
        return this.model.deleteMany({ ...filter });
    }
}



module.exports=BasicService;