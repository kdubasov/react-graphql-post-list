import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from "./Router.jsx";
import {ApolloProvider} from "@apollo/client";
import {apolloConnect} from "./apollo/connection.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ApolloProvider client={apolloConnect}>
          <Router />
      </ApolloProvider>
  </React.StrictMode>,
)
