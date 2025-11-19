import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LenisProvider from '@/Components/LenisProvider.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from '@/Components/ui/sonner'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster richColors />
    <BrowserRouter>
      <LenisProvider>
        <App />
      </LenisProvider>
    </BrowserRouter>
  </StrictMode>,
)
