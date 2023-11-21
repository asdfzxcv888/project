import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Appprovider } from './context/Globalcontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Appprovider>
    <App />
    </Appprovider>
    
  </React.StrictMode>,
)
