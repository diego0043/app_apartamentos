import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './components/home'
import {NavBar} from './components/navBar'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <Home/>
  </React.StrictMode>
)
