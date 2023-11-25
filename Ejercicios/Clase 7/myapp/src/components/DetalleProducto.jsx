import React from "react";


const DetalleProducto = ({ nombre, descripcion, precio, sku, cantidadDisponible }) => {
    return (
        <div className="detalle-producto">
            <h2 className="productoSeleccionado">{nombre}</h2>
            <p>Descripcion: <strong>{descripcion}</strong></p>
            <p>Precio: <strong>${precio}</strong></p>
            <p>SKU: <strong>{sku}</strong></p>
            <p>Cantidad disponible: <strong>{cantidadDisponible}</strong></p>
        </div>
    );
};

export default DetalleProducto;