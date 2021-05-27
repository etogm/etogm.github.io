import React from 'react';

const Filter = ({ id, name, info, filt }) => {
  const formchecks = info.map((i) => (
    <div className='form-check'>
      <input
        className='form-check-input'
        type='checkbox'
        value=''
        onChange={() => filt.handlerClickFilter(i.id)}
        checked={i.active}
      />
      <label className='form-check-label' for='flexCheckDefault'>
        {i.label}
      </label>
    </div>
  ));

  return (
    <li className='mb-1'>
      <button
        className='
      btn
      border-bottom
      text-start
      p-0
      fw-bold
      text-primary
      w-100
    '
        data-bs-toggle='collapse'
        data-bs-target={'#' + id}
        aria-expanded='true'
      >
        {name}
      </button>
      <div className='collapse show mt-2' id={id}>
        {formchecks}
      </div>
    </li>
  );
};

const FiltersBar = ({ filt }) => {
  const styles = {
    width: '30%',
  };

  return (
    <div className='flex-shrink-1 pt-3 p-1' style={styles}>
      <ul className='list-unstyled ps-0'>
        {filt.filters.map((f) => (
          <Filter name={f.name} info={f.info} id={f.id} key={f.id} filt={filt} />
        ))}
      </ul>
    </div>
  );
};

export default FiltersBar;
