import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Main from './pages/Main'

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path="/*" element={<Error replace />} />
      </Routes>
    </div>
  )
}

export default App
