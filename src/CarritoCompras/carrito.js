import { useState } from "react";

function CarritoCompras(props) {
    console.log(props.ProductoSeleccionado);

    return (
    <div>
    <h3>Añadido al carrito</h3>
    <button type="button" className="btn btn-outline-success">{props.ProductoSeleccionado.map((item)=>{
        return item.nombre; })} ha sido agregado</button>
    </div>
    );
}

export default CarritoCompras;