import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"; // Change import statement
import products from '../utils/MocksAsync.json';
import { apiCall } from "../utils/apiCall";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    apiCall(products).then(resp => {
      const productId = parseInt(window.location.pathname.split('/').pop());
      const foundProduct = resp.productos.find(product => product.id === productId);
      setProduct(foundProduct);
      setLoading(false);
    });
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      {product ? <ItemDetail item={product} /> : <p>Product not found</p>}
    </div>
  );
}

export default ItemDetailContainer;
