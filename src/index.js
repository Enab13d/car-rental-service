import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "components/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "components/App/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "components/App/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
<Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter basename="/car-rental-service">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
</React.StrictMode>
);
