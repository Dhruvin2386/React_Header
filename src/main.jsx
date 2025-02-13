import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Components/header'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
  </StrictMode>
)
