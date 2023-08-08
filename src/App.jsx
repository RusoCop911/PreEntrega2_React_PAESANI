import React from 'react';
import './App.css';
import Navbar from './Navbar';
import ItemListContainer from './ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer
        title="Lista de Calibres"
        containerClass="contenedorcalibres"
        titleClass="listadocalibres"
      />
    </div>
  );
}

export default App;
