import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {AuthProvider} from './store/auth.jsx'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <>
    <App />
    <ToastContainer />
  </>
  </AuthProvider>,
)
