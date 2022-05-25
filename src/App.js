import './App.css';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer  from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import ItemProvider from './Context/CartContext';

function App() {
  return (
    <div className="App">
      <ItemProvider>
        <BrowserRouter>
              <NavBar/>
          <Routes>
              <Route path='/' element={<ItemListContainer/>}/>

              <Route path="/categoria/:categoriaID" element={<ItemListContainer/>}/>

              <Route path='/item/:itemid' element={<ItemDetailContainer/>}/>    
          </Routes>
        </BrowserRouter>
    </ItemProvider>
    </div>
  );
}

export default App;
