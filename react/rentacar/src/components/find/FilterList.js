import React from 'react';

const FilterList = () => {
  return (
    <div class='mt-2 small'>
      Фильтры:
      <span class='bg-primary text-white p-1 rounded-pill small m-1'>
        Автоматическая коробка передач
        <button class='btn text-white small'>X</button>
      </span>
      <span class='bg-primary text-white p-1 rounded-pill small m-1'>
        С кондиционером
        <button class='btn text-white small'>X</button>
      </span>
    </div>
  );
};

export default FilterList;
