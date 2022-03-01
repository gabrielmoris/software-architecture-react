import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import App2 from "./App2";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

//USING CONTEXT AS A STATE MANAGER______

// ReactDOM.hydrate(
//     <React.StrictMode>
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//     </React.StrictMode>,
//     document.getElementById("root")
// );

//USING RECOIL AS A STATE MANAGER______

ReactDOM.hydrate(
    <React.StrictMode>
        <BrowserRouter>
            <App2 />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
