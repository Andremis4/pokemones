import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/NavBar';
import {Route, Routes} from 'react-router-dom'
import Pokemones from './views/Pokemones';
import Details from './views/Details';
import Home from './components/Home';

function App() {
  

  return (
    <>
   <NavBar></NavBar>
<Routes>
<Route>
<Route path='/' element={<Home/>}/>
<Route path='/pokemones' element={<Pokemones/>}/>
<Route path='/pokemones/:name' element={<Details/>}/>

</Route>

</Routes>
 
    </>
  )
}

export default App
