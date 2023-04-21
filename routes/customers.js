const express = require("express");
const bodyParser = require('body-parser');
const controllers = require("../controllers/customers");
const router = express.Router();

const jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

//router.route("/customers").get(controllers.getAllCustomers).post(urlencodedParser,controllers.createCustomer);
router.route("/").get(controllers.getAllCustomers).post(urlencodedParser, controllers.createCustomer);
router
 .route("/:id")
 .get(controllers.getCustomer)
 .put(urlencodedParser, controllers.updateCustomer)
 .delete(controllers.deleteCustomer);
module.exports = router;