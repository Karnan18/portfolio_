import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./Component/Hero/Hero.css"
import "./Component/Hiring/Hiring.css"
import "./Component/Navigation/Navbar.css"
import "./Component/Skillset/Skillset.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
