import React from 'react';
import  ReactDOM  from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import {ChainId, ThirdwebProvider} from '@thirdweb-dev/react';
import { Sepolia } from "@thirdweb-dev/chains";

import { StateContextProvider } from './context';

import App from './App';
import './index.css';


const root= ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThirdwebProvider desiredChainId={Sepolia} activeChain={Sepolia} clientId="10488b112235cc321cc20f2070bb5ac4">
        <Router>
            <StateContextProvider>
                <App />
            </StateContextProvider>
        </Router>
  </ThirdwebProvider> 
)