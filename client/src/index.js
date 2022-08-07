require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const appEleent = document.getElementById("app");

ReactDOM.render(<App />, appEleent);
