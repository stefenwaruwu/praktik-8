// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // <-- Import BrowserRouter di sini
import './index.css'
import App from './App.jsx'

// Basename harus sama dengan nama folder/repositori Anda
const BASE_PATH = "/praktik-8"; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={BASE_PATH}> {/* <--- Router dan Basename di sini */}
        <App />
    </BrowserRouter>
  </StrictMode>,
)