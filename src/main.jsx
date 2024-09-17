import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StoreProvider from './Content/Store.jsx'
import "bootstrap/dist/css/bootstrap.css"
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <StoreProvider>
            <App />
        </StoreProvider>
    </BrowserRouter>


)
