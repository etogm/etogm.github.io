import React from 'react';

const Input = (props) => {
  return (
    <div class='form-floating mb-3'>
      <input
        type={props.type}
        class='form-control
        rounded-0
        border-0 border-primary border-bottom
        text-primary'
        id={props.id}
        placeholder=''
      />
      <label for={props.id} className="text-primary">{props.placeholder}</label>
    </div>
  );
};

export default Input;
