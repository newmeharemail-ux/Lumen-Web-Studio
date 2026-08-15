import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import content from './data/content.js'
import { registerWebMCPTools } from './lib/webmcp.js'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

registerWebMCPTools(content.global.cta)