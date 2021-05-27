import React from 'react';
import LocationCard from '../common/LocationCard';
import VehicleCard from '../common/VehicleCard';
import Question from './Question';

import vehiclesInfo from '../../data/vehicle';
import questions from '../../data/question';

const Home = () => {
  return (
    <div>
      <header>
        <div className='container pt-5 pb-5'>
          <div className='row'>
            <div className='col'>
              <h1 className='text-white text-shadow'>
                Недорогие автомобили в аренду
              </h1>
            </div>
            <div className='col'>
              <LocationCard />
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className='container'>
          <h2 className='fw-bolder pt-3 mb-2'>Транспорт</h2>
          {vehiclesInfo.map((veh) => (
            <VehicleCard veh={veh} key={veh.id} />
          ))}

          <h2 className='fw-bolder pt-3 mb-2'>Часто задаваемые вопросы</h2>
          {questions.map((q) => (
            <Question key={q.id} question={q} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
