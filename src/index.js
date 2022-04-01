import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//importacao do DB
import { ApolloProvider } from '@apollo/client';
import client from "./graphql/client";

//autenticação
import AuthContext from './auth';

ReactDOM.render(
    <ApolloProvider client={client}>
        <AuthContext>
            <App/>
        </AuthContext>
    </ApolloProvider>, 
    document.getElementById("root"));