import React from 'react'
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
// import pages
import Home from './Pages/Home'
import About from './Pages/About'
import SingleCocktail from './Pages/SingleCocktail'
import Error from './Pages/Error'
// import components
import Navbar from './components/Navbar'
function App() {
  return (
   <Router>

    <Routes>
      <Route exact path="/" element={<Home/>}/>
      
<Route path="about" element={<About/>}/>

<Route path="/cocktail/:id" element={<SingleCocktail/>}/> 

<Route path="*" element={<Error/>}/> 

    </Routes>

   </Router>
  )
}

export default App