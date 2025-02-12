// == Import : npm
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// == Import : local
import App from './components/App/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
