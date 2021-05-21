import React from 'react';

const VehicleCard = () => {
  return (
    <div class='bg-white p-3 d-flex justify-content-between mt-2 mb-2'>
      <div class='w-75'>
        <h2 class='border border-primary border-0 border-bottom'>
          Hyundai i10
        </h2>
        <div class='d-flex align-items-center'>
          <img
            class='flex-shrink-0'
            src='http://static.rentcars.com/imagens/carros/renault_duster-2020-2021.png'
            alt=''
          />
          <div class='flex-grow-1 ms-3'>
            <div class='row row-cols-2 small'>
              <div class='col'>5 мест</div>
              <div class='col'>4 двери</div>
              <div class='col'>Механическая коробка передач</div>
              <div class='col'>3 небольшие сумки</div>
              <div class='col'>Кондиционер</div>
            </div>
          </div>
        </div>
      </div>
      <div class='text-end d-flex flex-column justify-content-between'>
        <span class='d-block'>
          Цена за 3 дня:
          <strong class='d-block fs-4'>RUB 357765,12</strong>
        </span>
        <button class='btn btn-primary rounded-pill'>Арендовать</button>
      </div>
    </div>
  );
};

export default VehicleCard;
