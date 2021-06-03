import React from 'react';
import Input from './Input';
import { Link } from 'react-router-dom';

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
              <h5 className='modal-title text-primary fw-bolder'>Вход</h5>

              <button
                type='button'
                class='btn-close'
                data-bs-dismiss='modal'
              ></button>
            </div>
            <div class='modal-body'>
              <Input placeholder='Имя' type='text' id='name' />
              <Input placeholder='Пароль' type='password' id='password' />
              <Link className='small text-muted'>Восстановить пароль</Link>

              <div className='form-check'>
                <input className='form-check-input' type='checkbox' />
                <label className='form-check-label' for='flexCheckDefault'>
                  Запомнить меня?
                </label>
              </div>

              <button
                type='button'
                class='btn btn-primary mt-2 mb-2 rounded-pill w-100'
              >
                Войти
              </button>
              
              <p className='small text-center'>
                Нет аккаунта? <Link className='text-muted'>Зарегистрируйтесь</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
