// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { ClerkProvider } from '@clerk/clerk-react'

// const PUBLISHABALE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

 
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//   <ClerkProvider publishedKey={PUBLISHABALE_KEY}>
//     <App />
//   </ClerkProvider>
//   </StrictMode>
// )

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ClerkProvider } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  console.error("Clerk publishable key is missing! Please set VITE_CLERK_PUBLISHABLE_KEY in your environment variables.");
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  </StrictMode>
);
