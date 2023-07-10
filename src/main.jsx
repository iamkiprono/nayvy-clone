import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import {

  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  </React.StrictMode>
);
