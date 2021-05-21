import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer mt-auto pt-3 bg-dark text-white-50 text-sm-start'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <p>© 2021 rent-a-car.ru</p>
          </div>
          <div className='col text-sm-end'>
            <ul className='list-inline'>
              <li className='list-inline-item'>
                <Link className='text-white-50' to='/'>
                  Политика конфиденциальности
                </Link>
              </li>
              <li className='list-inline-item'>
                <Link className='text-white-50' to='/'>
                  Условия использования
                </Link>
              </li>
              <li className='list-inline-item'>
                <Link className='text-white-50' to='/'>
                  Контактные данные
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
