import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Frame1 from './Frame1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Frame1 />
  </StrictMode>,
)
