import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Frame1 from './Frame1.jsx'
import Frame2 from './Frame2.jsx'
import Frame3 from './Frame3.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Frame1 />
    <div className='flex w-full'>
      <Frame2/>
      <Frame3/>
    </div>
  </StrictMode>,
)
