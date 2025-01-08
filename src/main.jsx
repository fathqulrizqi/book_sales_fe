import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Home from './Home.jsx'
import App from './App.jsx'
import Home from './pages/public/home/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Home /> */}
    {/* <Home /> */}
  </StrictMode>,
)
