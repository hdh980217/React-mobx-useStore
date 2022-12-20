import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'mobx-react';
import apple from './store/Apple';
import banana from './store/Banana';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider apple = {apple} banana={banana}>
        <App />
    </Provider>
);

reportWebVitals();
