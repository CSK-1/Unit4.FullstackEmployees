import express from "express";
const app = express();
export default app;
import employeesRouter from "./api/employees.js"

app.use(express.json());

app.route("/").get((req, res) => {
    response.send("Welcome to the Fullstack Employees API.");
  });

app.use("/employees", employeesRouter);

app.use((err, req, res, next) => {
	console.error(err);
	res.status(500).send("Sorry! Something went wrong :(");
});