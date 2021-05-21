import React from 'react';

const Filter = () => {
  return (
    <li class='mb-1'>
      <button
        class='
      btn
      border-bottom
      text-start
      p-0
      fw-bold
      text-primary
      w-100
    '
        data-bs-toggle='collapse'
        data-bs-target='#home-collapse'
        aria-expanded='true'
      >
        Тех. характеристики
      </button>
      <div class='collapse show mt-2' id='home-collapse'>
        <div class='form-check'>
          <input
            class='form-check-input'
            type='checkbox'
            value=''
            id='flexCheckDefault'
          />
          <label class='form-check-label' for='flexCheckDefault'>
            Автоматическая коробка передач
          </label>
        </div>

        <div class='form-check'>
          <input
            class='form-check-input'
            type='checkbox'
            value=''
            id='flexCheckDefault'
          />
          <label class='form-check-label' for='flexCheckDefault'>
            Механическая коробка передач
          </label>
        </div>

        <div class='form-check'>
          <input
            class='form-check-input'
            type='checkbox'
            value=''
            id='flexCheckDefault'
          />
          <label class='form-check-label' for='flexCheckDefault'>
            С кондиционером
          </label>
        </div>
      </div>
    </li>
  );
};

const Filters = () => {
  const styles = {
    width: '30%',
  };
  return (
    <div class='flex-shrink-1 pt-3 p-1' style={styles}>
      <ul class='list-unstyled ps-0'>
        <Filter />  
        <Filter />  
      </ul>
    </div>
  );
};

export default Filters;
