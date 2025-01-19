import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


try {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <App />
    );
} catch (error) {
    alert(error.message);
}


