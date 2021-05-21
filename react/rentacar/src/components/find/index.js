import React from 'react';
import LocationCard from '../common/LocationCard';
import VehicleCard from '../common/VehicleCard'
import FilterList from './FilterList';
import Filters from './Filters';

const Find = () => {
  return (
    <main>
      <div class='container d-flex'>
        <Filters />

        <div class='w-100 pt-3 p-1'>
          <LocationCard />

          <FilterList />

          <div>
            <VehicleCard />
            <VehicleCard />
            <VehicleCard />
            <VehicleCard />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Find;
