import { connect } from "mongoose";

export const dbConnection =connect("mongodb://localhost:27017/elsoukelyoum").then(() => {
    console.log("Database connected");
})