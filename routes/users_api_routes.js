const router = require("express").Router();
const {
  APIControllerV1,
} = require("../controllers/api/users/apiController_v1");
const apiv2 = require("../controllers/api/users/apiController_v2");
const checkAuthJWT = require("../middleware/authCheckJWT");

router.get("/v1", APIControllerV1.readAPI);
router.post("/v1", APIControllerV1.createAPI);
router.put("/v1", APIControllerV1.updateAPI);
router.delete("/v1", APIControllerV1.deleteAPI);

router.get("/v2", checkAuthJWT, apiv2.readAPI);
router.post("/v2", checkAuthJWT, apiv2.createAPI);
router.put("/v2", checkAuthJWT, apiv2.updateAPI);
router.delete("/v2", checkAuthJWT, apiv2.deleteAPI);
router.post("/v2/login", apiv2.adminLogin);

module.exports = router;
