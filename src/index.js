import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "./context/expenseContext";
import "./index.css";
// import { SpeechProvider } from "@speechly/react-client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <SpeechProvider appId="88f12ed3-0442-4d6f-9595-501fce550ccd" language="en-US"> */}
      <Provider>
        <App />
      </Provider>
    {/* </SpeechProvider> */}
  </React.StrictMode>
);
