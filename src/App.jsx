import React from 'react';
import './App.css';
import Navbar from './Navbar';
import ItemListContainer from './ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer
        title="Listado de Calibres"
        titleClass="titulo"
      />
    </div>
  );
}

export default App;
