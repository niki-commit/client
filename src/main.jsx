import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<div className="flex justify-center items-center"><div className="text-center">Loading...</div></div>}>
      <App />
    </Suspense>
  </StrictMode>,
)
