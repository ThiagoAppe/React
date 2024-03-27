import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PerfumeriaGenios from '../assets/PerfumeriaGenios.png';
import CartWidget from './CartWidget';
import { apiCall } from '../utils/apiCall'; 

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiCall().then(res => {
      setCategories(res.categorias);
      setLoading(false);
    }).catch(error => {
      console.error('Error fetching categories:', error);
    });
  }, []);

  return (
    <div className="navbar container-fluid d-flex justify-content-between bg-primary">
      <div id='BrandName' className='me-auto mb-3 ps-2 d-flex align-items-center'>
        <Link to="/"> {/* Enlace a la página principal */}
          <img src={PerfumeriaGenios} alt="Perfumeria Genios" className='img-fluid' />
        </Link>
      </div>
      <div className='p-2'>
        <ul className='d-flex px-1 list-unstyled m-0'>
          <li className='mx-1'>
            <button
              className="btn bg-primary-subtle"
              onClick={() => setShowCategories(!showCategories)}
              data-bs-toggle="dropdown">
              Categorías
            </button>
            <div className={`dropdown-menu${showCategories ? ' show' : ''}`}>
              {loading ? (
                <p>Cargando...</p>
              ) : (
                categories.map(category => (
                  <Link key={category.id} className="dropdown-item hover:underline" to={`/category/${category.id}`}>
                    {category.nombre}
                  </Link>
                ))
              )}
            </div>
          </li>
          <li className='mx-1'>
            <button className='btn bg-primary-subtle'>Quienes Somos</button>
          </li>
          <li className='mx-1'>
            <button className='btn bg-primary-subtle'>Contacto</button>
          </li>
        </ul>
      </div>
      <div className=''>
        <CartWidget />
      </div>
    </div>
  );
};

export default Navbar;
