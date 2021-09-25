import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(  // exibe algo no html
  <React.StrictMode>
    <App />  
  </React.StrictMode>,
  document.getElementById('root')  // vai no index, procura pelo id root e coloca oq esta nas linhas anteriores
);

