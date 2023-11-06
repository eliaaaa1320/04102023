import CarritoCompras from './CarritoCompras/carrito';
import './App.css';
import Impresos from './Productos/productos';
import { useState } from 'react';
import NavBar from './NavBar/NavBar';


function App() {
  const [items, useItems] = useState ([]);
  return (
    <div> 
    <NavBar></NavBar>
    <Impresos cambio={useItems}></Impresos>
    <CarritoCompras ProductoSeleccionado={items}></CarritoCompras>
    </div>
  );
}

export default App;
