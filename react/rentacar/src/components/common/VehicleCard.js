import React from 'react';
import { Link } from 'react-router-dom';

const VehicleCard = (props) => {
  return (
    <div className='bg-white p-3 d-flex justify-content-between mt-2 mb-2'>
      <div className='w-75'>
        <h2 className='border border-primary border-0 border-bottom'>
          {props.veh.name}
        </h2>
        <div className='d-flex align-items-center'>
          <img
            className='flex-shrink-0'
            src={props.veh.img}
            alt={props.veh.img}
          />
          <div className='flex-grow-1 ms-3'>
            <div className='row row-cols-2 small'>
              {props.veh.description.map(d => <div className='col' key={d}>{d}</div>)}
            </div>
          </div>
        </div>
      </div>
      <div className='text-end d-flex flex-column justify-content-between'>
        <span className='d-block'>
          Цена за сутки:
          <strong className='d-block fs-4'>RUB {props.veh.price}</strong>
        </span>

        <Link className='btn btn-primary rounded-pill' to='/rent'>Арендовать</Link>
      </div>
    </div>
  );
};

export default VehicleCard;
