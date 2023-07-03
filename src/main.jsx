import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-vvavubejfc3hoy2m.us.auth0.com"
      clientId="tZiOpNOPuxfYTeFDPs1utIATkIKarm9S"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      audience="thisisnayvycloneidentifier"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
