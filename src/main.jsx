import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Crud from './components/Cadastro2'
// import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Crud />
    {/* <App /> */}
  </StrictMode>,
)
