import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import {BrowserRouter} from 'react-router-dom'
import { DarkProvider } from './context/dark'
import './index.css'
import { Analytics } from '@vercel/analytics/react';

ReactDOM.createRoot(document.getElementById('root')).render(
<DarkProvider>
  <BrowserRouter>
      <Analytics />
      <App />
    </BrowserRouter>
</DarkProvider>
)
