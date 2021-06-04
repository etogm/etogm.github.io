import React from 'react';

const CarCard = ({ img, onMouseEnter, onMouseLeave }) => {
  const style = {
    margin: '1rem',
    width: '280px',
    height: '280px',
  };
  return (
    <img
      src={img}
      alt={img}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
};

export default CarCard;
