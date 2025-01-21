import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHEBALE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if(!PUBLISHEBALE_KEY){
  throw new Error("missing api key");
  
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ClerkProvider publishedKey={PUBLISHEBALE_KEY}>
    <App />
  </ClerkProvider>
  </StrictMode>
)
