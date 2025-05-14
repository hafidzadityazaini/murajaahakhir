import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Aplikasi from './bmicalculator/app'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Aplikasi />
  </StrictMode>,
)