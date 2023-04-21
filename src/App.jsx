import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
// import Characters from './pages/Characters'
import Locations from './pages/Locations'
// import Episodes from './pages/Episodes'

function App() {
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/*" element={<Error replace />} />
        <Route path='/locations' element={<Locations />} />

        {/* <Route path='/characters' element={<Characters />} />
        
        <Route path='/episodes' element={<Episodes />} /> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App
