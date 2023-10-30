const express=require("express");
const router=express.Router();
const { clientController }=require("../controllers/clientControllers")

router.get("/", clientController.getClient);
router.get("/:id", clientController.getParticularClient)

router.post("/", clientController.createClient);

router.put("/:id", clientController.editClient);

router.delete("/:id", clientController.deleteClient);


module.exports.clientRoutes=router;