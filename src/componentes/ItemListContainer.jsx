import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import categories from '../utils/MocksAsync.json';
import { apiCall } from "../utils/apiCall";

const ItemListContainer = () => {
  const { id } = useParams();
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiCall(categories).then(res => { 
      setResponse(res); 
      setLoading(false); 
    });
  }, []);

  if (loading) return <h1>Cargando...</h1>;

  const getProductosByCategory = (catId) => {
    if (catId) {
      return response.productos.filter((product) => product.categoria === parseInt(catId));
    }
  };

  const productsPorCategoria = getProductosByCategory(id);

  return (
    <>
      <div className="text-center">
        <h1>Categorias</h1>
        <div className="d-flex justify-content-center">
          {response.categorias.map((cat) => (
            <Link key={cat.id} to={`/category/${cat.id}`}>
              <button className="btn btn-primary m-2">{cat.nombre}</button>
            </Link>
          ))}
        </div>
      </div>
      {id && productsPorCategoria && (
        <div className="d-flex justify-content-center">
          <div className="row">
            {productsPorCategoria.map((producto) => (
              <div key={producto.id} className="col-md-4 mb-4">
                <div className="card h-100">
                  <img 
                    src={producto.imagen} 
                    className="card-img-top img-fluid"
                    alt={producto.nombre}
                    style={{ objectFit: 'cover', maxHeight: '350px' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">{producto.descripcion}</p>
                    <Link to={`/item/${producto.id}`} className="btn btn-primary mt-auto">Ver detalle</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
