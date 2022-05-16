import './App.css';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer  from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import {BrowserRouter  , Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path='/' element={<ItemListContainer/>}/>

    <Route path="/categoria/:categoriaID" element={<ItemListContainer/>}/>

    <Route path='/item/:Detalleid' element={<ItemDetailContainer/>}/>    
    </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
