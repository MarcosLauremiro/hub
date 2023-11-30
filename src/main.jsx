import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import { UseProvider } from './providers/userContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UseProvider>
          <App />
      </UseProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
