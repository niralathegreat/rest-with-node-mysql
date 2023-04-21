const AppError = require("../utils/appError");
const conn = require("../services/db");

exports.getAllCustomers = (req, res, next) => {
 conn.query("SELECT * FROM customers", function (err, data, fields) {
   if(err) return next(new AppError(err))
   res.status(200).json({
     status: "success",
     length: data?.length,
     data: data,
   });
 });
};

exports.createCustomer = (req, res, next) => {
 //console.log(req);
 if (!req.body) return next(new AppError("No form data found", 404));
 const values = [req.body.name, req.body.email, req.body.phone];
 //const values = ['ddddd', "pending"];
 conn.query(
   "INSERT INTO customers (name, email, phone) VALUES(?)",
   [values],
   function (err, data, fields) {
     if (err) return next(new AppError(err, 500));
	 res.header("Access-Control-Allow-Origin", "*");
     res.status(201).json({
       status: "success",
       message: "Customer created!",
     });
   }
 );
};

exports.getCustomer = (req, res, next) => {
 if (!req.params.id) {
   return next(new AppError("No Customer id found", 404));
 }
 conn.query(
   "SELECT * FROM customers WHERE id = ?",
   [req.params.id],
   function (err, data, fields) {
     if (err) return next(new AppError(err, 500));
     res.status(200).json({
       status: "success",
       length: data?.length,
       data: data,
     });
   }
 );
};


exports.updateCustomer = (req, res, next) => {
 if (!req.params.id) {
   return next(new AppError("No customer id found", 404));
 }
 conn.query(
   "UPDATE customers SET name='"+[req.body.name]+"', email='"+[req.body.email]+"', phone='"+[req.body.phone]+"' WHERE id=?",
   [req.params.id],
   function (err, data, fields) {
     if (err) return next(new AppError(err, 500));
     res.status(201).json({
       status: "success",
       message: "customer updated!",
     });
   }
 );
};


exports.deleteCustomer = (req, res, next) => {
 if (!req.params.id) {
   return next(new AppError("No customer id found", 404));
 }
 conn.query(
   "DELETE FROM customers WHERE id=?",
   [req.params.id],
   function (err, fields) {
     if (err) return next(new AppError(err, 500));
     res.status(201).json({
       status: "success",
       message: "customer deleted!",
     });
   }
 );
}