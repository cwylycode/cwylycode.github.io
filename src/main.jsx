import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/main.css'

import { Navbar } from './components/Navbar'
import { PageHome } from './pages/PageHome'

function App() {
  return (
    <div className='wrapper'>
      <Navbar />
      <div className="page">
        <PageHome />
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)