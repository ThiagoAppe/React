import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleCountChange = (value) => {
    const newCount = count + value;
    if (newCount >= 1 && newCount <= stock) {
      setCount(newCount);
    }
  };

  const handleAdd = () => {
    if (count > 0) {
      onAdd(count);
    }
  };

  return (
    <div>
      <button className="btn btn-primary mx-1" onClick={() => handleCountChange(-1)}>
        -
      </button>
      <button className="btn btn-primary mx-1" onClick={() => handleCountChange(1)}>
        +
      </button>
      <button className="btn btn-primary mx-1" onClick={() => handleAdd()}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
