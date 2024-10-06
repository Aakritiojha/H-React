
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const name = "Vite"
function NewApp(){
  return (
  <div>
    <h1>I am from newApp {name}</h1>
  </div>
  )
}

createRoot(document.getElementById('root')).render(
  
  <>
  <NewApp />
  <App />
  </>

)

