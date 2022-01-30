import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
      <div className='App'>
          <Navbar/>
          {/* <ItemListContainer greeting="Catálogo de productos de la empresa."/> */}
          <ItemDetailContainer/>
      </div>
    );
}

export default App;
