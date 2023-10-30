
const { clientService }=require("../services/client.service");
const Response=require("../helpers/response");

class clientController {

    getClient=async (req, res) => {
        try {
            const clients=await clientService.find();
            // if (clients.length<0) return Response(res).message("No Client Found").body(clients).send();
            Response(res).message("Clients Found Successfully").body(clients).send();
        } catch (error) {
            console.log(error)
            Response(res).error("Internal Server Error while fetching clients").status(401).send();
        }
    }

    getParticularClient=async (req, res) => {
        try {
            const client=await clientService.findById(req.params.id);
            Response(res).message("Client Found Successfully").body(client).send();
        } catch (error) {
            Response(res).error("Internal Server Error while fetching client").status(401).send();
        }
    }

    createClient=async (req, res) => {
        try {
            const newClient=await clientService.create({ ...req.body });
            Response(res).message("Client Created Successfully").body(newClient).send();
        } catch (error) {
            Response(res).error("Internal Server Error while Creating client").status(401).send();
        }
    }

    editClient=async (req, res) => {
        try {
            const clientId=req.params.id
            const newClient=await clientService.findByIdAndUpdate(clientId, { ...req.body });
            Response(res).message("Client Edited Successfully").body(newClient).send();
        } catch (error) {
            Response(res).error("Internal Server Error while Editing client").status(400).send();
        }
    }

    deleteClient=async (req, res) => {
        try {
            const clientId=req.params.id
            await clientService.findByIdAndDelete(clientId);
            Response(res).message("Client Deleted Successfully").send();
        } catch (error) {
            Response(res).error("Internal Server Error while Deleting client").status(400).send();
        }
    }

}

module.exports.clientController=new clientController();