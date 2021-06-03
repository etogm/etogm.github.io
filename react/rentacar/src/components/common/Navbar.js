import React from 'react';
import { Link } from 'react-router-dom';
import Auth from './Auth';

const Navbar = () => {

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary shadow'>
      <div className='container'>
        <Link className='navbar-brand navbar-brand text-shadow' to='/'>
          rent-a-car.ru
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-mdb-toggle='collapse'
          data-mdb-target='#navbarRightAlignExample'
        >
          <i className='fas fa-bars'></i>
        </button>
        <div className='collapse navbar-collapse' id='navbarRightAlignExample'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item dropdown'>
              <div className='nav-link text-white' type='button'>
                Язык: <strong>RU</strong>
              </div>
              <ul className='dropdown-menu'>
                <li>
                  <div className='dropdown-item' href='#' type='button'>
                    RU
                  </div>
                </li>
                <li>
                  <div className='dropdown-item' href='#' type='button'>
                    ENG
                  </div>
                </li>
              </ul>
            </li>

            <li className='nav-item dropdown'>
              <div className='nav-link text-white' type='button'>
                Валюта: <strong>RUB</strong>
              </div>
              <ul className='dropdown-menu'>
                <li>
                  <div className='dropdown-item' href='#' type='button'>
                    RUB
                  </div>
                </li>
                <li>
                  <div className='dropdown-item' href='#' type='button'>
                    USD
                  </div>
                </li>
                <li>
                  <div className='dropdown-item' href='#' type='button'>
                    EUR
                  </div>
                </li>
              </ul>
            </li>

            <li className='nav-item'>
              <Auth />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
