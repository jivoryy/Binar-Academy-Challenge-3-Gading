const router = require("express").Router();
const { APIController } = require("../controllers/apiController");

router.get("/", APIController.readAPI);
router.post("/", APIController.createAPI);
router.put("/", APIController.updateAPI);
router.delete("/", APIController.deleteAPI);

module.exports = router;
