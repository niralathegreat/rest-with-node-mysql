// https://arctype.com/blog/rest-api-tutorial/
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const todos = require("./routes/todos");
const customers = require("./routes/customers");
const controllers = require("./controllers/todos");
const AppError = require("./utils/appError");
const errorHandler = require("./utils/errorHandler");

const app = express();
app.use(cors());
app.use(express.json());

//const jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

//app.use(api, router);
//app.use('/', router);
//app.use('/', todos);

/* app.post('/hello', (req, res) => {
  res.send('Got a POST request');
})
app.post('/todos', urlencodedParser, controllers.createTodo);
app.get('/todos', controllers.getAllTodos); */

/*app.post('/todos', (req, res) => {
  res.send('Got a POST request');
})*/

app.use('/todos', todos);
app.use('/customers', customers);

app.all("*", (req, res, next) => {
 next(new AppError(`The URL ${req.originalUrl} does not exists`, 404));
}); 
app.use(errorHandler); 

const PORT = 3001;
app.listen(PORT, () => {
 console.log(`server running on port ${PORT}`);
});

module.exports = app;

/*
router.route('/todos/:user_id')
  .all(function (req, res, next) {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
    next()
  })
  .get(function (req, res, next) {
	res.json({ message: "Hello from the root application" });
    //res.json(req.user)
  })
  .put(function (req, res, next) {
    // just an example of maybe updating the user
    req.user.name = req.params.name
    // save user ... etc
    res.json(req.user)
  })
  .post(function (req, res, next) {
    next(new Error('not implemented'))
  })
  .delete(function (req, res, next) {
    next(new Error('not implemented'))
  })
  
module.exports = router;

*/

// create application/json parser
//const jsonParser = bodyParser.json();
 
// create application/x-www-form-urlencoded parser
//const urlencodedParser = bodyParser.urlencoded({ extended: false })
 
// POST /login gets urlencoded bodies
/* app.post('/login', urlencodedParser, function (req, res) {
  //console.log(req);
  res.send('welcome, ' + req.body.username);
})*/

/*app.post('/register', jsonParser, function (req, res) {
	//const entries = Object.entries(req.body);
	//res.send('welcome, ' + entries);
	//console.log(req);
	//res.send('welcome, ' + req.query.phone);
	res.send('welcome, ' + req.body.phone);
})*/



/* app.post('/login', urlencodedParser, function (req, res) {
  //console.log(req);
  res.send('welcome, ' + req.body.username);
}) */

//app.use(api, router);
//app.use('/', router);

// app.use('/todos', router);
//app.use('/customers', router);

//router.use("/todos", require("./controllers/index"));
//router.use("/customers", require("./controllers/customers"));


/*app.get('/api/myapp/', function(req, res){
    //res.send("Hello from the root application URL");
	res.json({ message: "Hello from the root application" });
}); */

/* app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params);
})*/




/*app.configure(function(){
  app.use(express.bodyParser());
});*/
