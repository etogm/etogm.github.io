import React from 'react';

const FilterList = ({filt}) => {
  return (
    <div className='mt-2 small'>
      Фильтры:
      {filt.filters.map((f) =>
        f.info.map((i) =>
          i.active ? (
            <span className='text-white small m-1 d-inline-block' style={({height: '28px' })}>
              <button
                className='btn btn-primary btn-sm rounded-pill'
                onClick={() => filt.handlerClickFilter(i.id)}
              >
                {i.label} X
              </button>
            </span>
          ) : (
            ''
          )
        )
      )}
    </div>
  );
};

export default FilterList;
