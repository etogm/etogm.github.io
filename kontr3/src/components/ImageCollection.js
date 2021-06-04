import { React, useState } from 'react';
import CarCard from './CarCard';
import { carsData } from '../data';
import './ImageCollection.css';

const ImageCollection = () => {
  const [activeCar, setActiveCar] = useState('');

  const carInfoHandler = (car) => {
    setActiveCar(`${car.model}, $${car.price}`);
  };

  const carInfoClearHandler = () => {
    setActiveCar('');
  };

  return (
    <div className='img-collection'>
      <h1>Продаются автомобили:</h1>

      <div>
        {carsData.map((car) => (
          <CarCard
            img={car.src}
            onMouseEnter={() => carInfoHandler(car)}
            onMouseLeave={() => carInfoClearHandler()}
          />
        ))}
      </div>

      <input type='text' value={activeCar} disabled />
    </div>
  );
};

export default ImageCollection;
