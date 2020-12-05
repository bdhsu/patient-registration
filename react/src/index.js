import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { ChakraProvider } from '@chakra-ui/react';
import { StateMachineProvider, createStore } from 'little-state-machine';

import App from './App';
import theme from 'theme';

// Store for mult-step registration data
createStore({
    register: {},
});

ReactDOM.render(
    <StrictMode>
        <ChakraProvider theme={theme}>
            <StateMachineProvider>
                <App />
            </StateMachineProvider>
        </ChakraProvider>
    </StrictMode>,
    document.getElementById('root')
);
