import React from 'react';
import './App.css';
import Navbar from './Navbar';
import ItemListContainer from './ItemListContainer';
import Nosotros from './Nosotros';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
