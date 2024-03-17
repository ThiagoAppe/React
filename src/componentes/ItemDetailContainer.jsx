import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import products from '../utils/MocksAsync.json';
import { apiCall } from "../utils/apiCall";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Simular una llamada a la API para obtener los productos
    apiCall(products).then(resp => {
      // Obtener el ID del producto de la URL
      const productId = parseInt(window.location.pathname.split('/').pop());
      // Encontrar el producto correspondiente al ID
      const foundProduct = resp.productos.find(product => product.id === productId);
      setProduct(foundProduct);
      setLoading(false);
    });
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      {product ? <ItemDetail item={product} /> : <p>Producto no encontrado</p>}
    </div>
  );
}

export default ItemDetailContainer;
