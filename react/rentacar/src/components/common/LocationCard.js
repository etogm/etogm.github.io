import React from 'react';
import { Link } from 'react-router-dom';

const LocationCard = () => {
  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title text-primary fw-bolder mb-4'>Локация</h5>
        <input
          type='text'
          className='
                  form-control
                  rounded-0
                  border-0 border-primary border-bottom
                  text-primary
                '
          placeholder='Введиете аэропорт или город'
          value='Аэропорт, г. Казань'
        />
        <div className='row'>
          <div className='col'>
            <input
              type='date'
              className='
                      form-control
                      rounded-0
                      border-0 border-primary border-bottom
                      text-primary
                    '
            />
          </div>
          <div className='col'>
            <input
              type='date'
              className='
                      form-control
                      rounded-0
                      border-0 border-primary border-bottom
                      text-primary
                    '
            />
          </div>
        </div>
        <Link to='/find' type='button' className='btn btn-primary mt-4 rounded-pill w-100'>
          Найти автомобиль
        </Link>
      </div>
    </div>
  );
};

export default LocationCard;
