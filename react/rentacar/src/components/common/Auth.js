import React from 'react';
import Input from './Input';

const Auth = () => {
  return (
    <div>
      <div
        className='nav-link text-white sign-up'
        data-bs-toggle='modal'
        data-bs-target='#authModal'
        type='button'
      >
        Войти
      </div>

      <div class='modal fade' id='authModal' tabindex='-1'>
        <div class='modal-dialog'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 className='modal-title text-primary fw-bolder'>
                Вход
              </h5>
            </div>
            <div class='modal-body'>
              <Input placeholder='Имя' type='text' id='name'/>
              <Input placeholder='Пароль' type='password' id='password'/>

              <button type='button' class='btn btn-primary mt-4 rounded-pill w-100'>
                Войти
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
