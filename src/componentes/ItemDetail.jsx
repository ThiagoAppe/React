import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const handleAdd = (count) => {
    console.log(`Agregar ${count} al carrito`);
  };

  return (
    <div className="mx-auto my-auto" style={{ maxWidth: "500px" }}>
      <div>
        <img src={item.imagen} alt={item.nombre} style={{ maxWidth: "100%", height: "auto" }} />
      </div>
      <div>
        <p className="fw-bold fs-5">{item.nombre}</p> {/* Estilos para el nombre */}
        <p className="fw-bold fs-4 text-primary">${item.precio}</p> {/* Estilos para el precio */}
        <ItemCount stock={item.stock} initial={0} onAdd={handleAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
