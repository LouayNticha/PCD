import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './CSS/index.css'
import NAV from './components/NavBarDoctor'


ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter><App /></BrowserRouter> 
    
)
