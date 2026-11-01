import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx'
import './index.css'

// SUNTIKAN TRICK PAMUNGKAS LANGSUNG KE BODY LEWAT JAVASCRIPT
if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    body, #root, #root > div {
      background-image: url('/bg-login.webp.jpg') !important;
      background-size: cover !important;
      background-position: center !important;
      background-attachment: fixed !important;
      background-repeat: no-repeat !important;
      background-color: transparent !important;
    }
    /* Paksa hancurkan semua background hijau bawaan template, KECUALI teks loading */
    .canopy-backdrop, 
    [class*="bg-canopy"]:not(.min-h-screen), 
    [class*="bg-forest"] {
      background: transparent !important;
      background-image: none !important;
    }
  `;
  document.head.appendChild(style);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
)