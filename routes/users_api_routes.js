const router = require("express").Router();
const {
  APIControllerV1,
} = require("../controllers/api/users/apiController_v1");
const {
  APIControllerV2,
} = require("../controllers/api/users/apiController_v2");

router.get("/v1", APIControllerV1.readAPI);
router.post("/v1", APIControllerV1.createAPI);
router.put("/v1", APIControllerV1.updateAPI);
router.delete("/v1", APIControllerV1.deleteAPI);

router.get("/v2", APIControllerV2.readAPI);
router.post("/v2", APIControllerV2.createAPI);
router.put("/v2", APIControllerV2.updateAPI);
router.delete("/v2", APIControllerV2.deleteAPI);

module.exports = router;
