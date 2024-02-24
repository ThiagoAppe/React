import React, { useState } from 'react';
import PerfumeriaGenios from '../assets/PerfumeriaGenios.png';
import CartWidget from './CartWidget';

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <div className="navbar container-fluid d-flex justify-content-between bg-primary">
      <div id='BrandName' className='me-auto mb-3 ps-2 d-flex align-items-center' >
        <img src={PerfumeriaGenios} alt="" className='img-fluid' />
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
              <button className="dropdown-item hover:underline">Limpieza</button>
              <button className="dropdown-item hover:underline">Cosmeticos</button>
              <button className="dropdown-item hover:underline">Capilar</button>
              <button className="dropdown-item hover:underline">Coloracion</button>
              <button className="dropdown-item hover:underline">Higiene Personal</button>
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
