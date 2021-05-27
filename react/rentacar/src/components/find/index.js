import { React, useState } from 'react';
import LocationCard from '../common/LocationCard';
import VehicleCard from '../common/VehicleCard';
import FiltersBar from './FiltersBar';

import vehiclesInfo from '../../data/vehicle';
import FilterList from './FilterList';

const filtersInit = [
  {
    id: 'filter1',
    name: 'Тех. характеристики',
    info: [
      {
        id: 'info1_1',
        label: 'Автоматическая коробка передач',
        active: false,
      },
      {
        id: 'info1_2',
        label: 'Механическая коробка передач',
        active: false,
      },
      {
        id: 'info1_3',
        label: 'С кондиционером',
        active: false,
      },
    ],
  },
  {
    id: 'filter2',
    name: 'Количество мест',
    info: [
      {
        id: 'info2_1',
        label: '4 места',
        active: false,
      },
      {
        id: 'info2_2',
        label: '5 мест',
        active: false,
      },
      {
        id: 'info2_3',
        label: '2 места',
        active: false,
      },
    ],
  },
];

const Find = () => {
  const [filters, setFilters] = useState(filtersInit);

  const handlerClickFilter = (id) => {
    setFilters((prevState) =>
      prevState.map((filter) => {
        return {
          ...filter,
          info: filter.info.map((i) => ({
            ...i,
            active: i.id === id ? !i.active : i.active,
          })),
        };
      })
    );
  };
  
  const filt = { filters, handlerClickFilter };

  return (
    <main>
      <div className='container d-flex'>
        <FiltersBar filters={filters} filt={filt} />

        <div className='w-100 pt-3 p-1'>
          <LocationCard />

          <FilterList filt={filt}/>

          <div>
            {vehiclesInfo.map((veh) => (
              <VehicleCard veh={veh} key={veh.id} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Find;
