import React from 'react';

const LocationCard = () => {
  return (
    <div class='card'>
      <div class='card-body'>
        <h5 class='card-title text-primary fw-bolder mb-4'>Локация</h5>
        <input
          type='text'
          class='
                  form-control
                  rounded-0
                  border-0 border-primary border-bottom
                  text-primary
                '
          id='exampleInputPassword1'
          placeholder='Введиете аэропорт или город'
          value='Аэропорт, г. Казань'
        />
        <div class='row'>
          <div class='col'>
            <input
              type='date'
              class='
                      form-control
                      rounded-0
                      border-0 border-primary border-bottom
                      text-primary
                    '
            />
          </div>
          <div class='col'>
            <input
              type='date'
              class='
                      form-control
                      rounded-0
                      border-0 border-primary border-bottom
                      text-primary
                    '
            />
          </div>
        </div>
        <button type='button' class='btn btn-primary mt-4 rounded-pill w-100'>
          Найти автомобиль
        </button>
      </div>
    </div>
  );
};

export default LocationCard;
