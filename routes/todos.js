const express = require("express");
const bodyParser = require('body-parser');
const controllers = require("../controllers/todos");
//const customer = require("../controllers/customers");
const router = express.Router();

const jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

//router.route("/").get(controllers.getAllTodos).post(controllers.createTodo);

//router.route("/todos").get(controllers.getAllTodos).post(urlencodedParser,controllers.createTodo);
router.route("/").get(controllers.getAllTodos).post(urlencodedParser,controllers.createTodo);
router
 .route("/:id")
 .get(controllers.getTodo)
 .put(controllers.updateTodo)
 .delete(controllers.deleteTodo); 
 
/* router.route("/customers").get(customer.getAllCustomers).post(urlencodedParser,customer.createCustomer);
router
 .route("/:id")
 .get(customer.getCustomer)
 .put(customer.updateCustomer)
 .delete(customer.deleteCustomer); */
module.exports = router;