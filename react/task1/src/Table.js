import React from 'react';

const Info = (props) => {
  return (
    <tr
      className={props.active ? 'table-success' : 'table-danger'}
      onClick={props.changeColor}
    >
      <th scope='row'>{props.id}</th>
      <td>{props.first}</td>
      <td>{props.last}</td>
      <td>{props.handle}</td>
    </tr>
  );
};

const Table = () => {
  const [people, setPeople] = React.useState([
    {
      id: 1,
      first: 'mark',
      last: 'mark3',
      handle: '@m3',
      active: false,
    },
    {
      id: 2,
      first: 'vasya',
      last: 'ivanov',
      handle: '@g3',
      active: true,
    },
    {
      id: 3,
      first: 'pertua',
      last: 'markov',
      handle: '@ks',
      active: false,
    },
  ]);

  function handleClick(id) {
    setPeople((prevState) =>
      prevState.map((p) => ({
        id: p.id,
        first: p.first,
        last: p.last,
        handle: p.handle,
        active: p.id === id ? !p.active : p.active,
      }))
    );
  };

  return (
    <div>
      <table class='table'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>First</th>
            <th scope='col'>Last</th>
            <th scope='col'>Handle</th>
          </tr>
        </thead>
        <tbody>
          {people.map((p) => (
            <Info
              first={p.first}
              last={p.last}
              handle={p.handle}
              id={p.id}
              active={p.active}
              key={p.id}
              changeColor={() => handleClick(p.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
