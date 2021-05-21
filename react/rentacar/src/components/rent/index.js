import React from 'react';

const Rent = () => {
  const styles = {
    width: '30%',
  }

  return (
    <main>
      <div className='container d-flex'>
        <div className='flex-shrink-1 pt-3 p-1' style={styles}>
          <ul className='list-unstyled ps-0'>
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
                data-bs-target='#home-collapse'
                aria-expanded='true'
              >
                Тех. поддержка
              </button>
              <div className='collapse show mt-2 small' id='home-collapse'>
                <p>
                  <span className='d-block mb-4'>
                    Посетите раздел часто задаваемых вопросов. Или позвоните
                    нам:
                  </span>
                  <strong className='d-block'>8-800-77-07-999</strong>
                  (c 03:00 до 22:00)
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className='w-100 pt-3 p-1'>
          <div>
            <div className='bg-white p-3 d-flex justify-content-between mt-2 mb-2'>
              <div className='w-75'>
                <h2 className='border border-primary border-0 border-bottom'>
                  Hyundai i10
                </h2>
                <div className='d-flex align-items-center'>
                  <img
                    className='flex-shrink-0'
                    src='http://static.rentcars.com/imagens/carros/renault_duster-2020-2021.png'
                    alt=''
                  />
                  <div className='flex-grow-1 ms-3'>
                    <div className='row row-cols-2 small'>
                      <div className='col'>5 мест</div>
                      <div className='col'>4 двери</div>
                      <div className='col'>Механическая коробка передач</div>
                      <div className='col'>3 небольшие сумки</div>
                      <div className='col'>Кондиционер</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='text-end d-flex flex-column justify-content-between'>
                <span className='d-block'>
                  Цена за 3 дня:
                  <strong className='d-block fs-4'>RUB 3565,12</strong>
                </span>
              </div>
            </div>

            <div className='bg-white p-3 mt-2 mb-2'>
              <div>
                <h2 className='border border-primary border-0 border-bottom'>
                  Локация и время
                </h2>
                <div className='d-flex align-items-center'>
                  <div className='flex-grow-1'>
                    <div className='row row-cols-2 small'>
                      <div className='col'>
                        <h5 className='fw-bold'>Аэропорт, г. Казань</h5>
                        420017, Россия, Республика Татарстан, г.Казань,
                        Аэропорт. АО «Международный аэропорт «Казань»
                      </div>
                      <div className='col'>
                        <h5 className='fw-bold'>Пятница</h5>
                        19 марта, 2021г. в 22:00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-white p-3 mt-2 mb-2'>
              <div>
                <h2 className='border border-primary border-0 border-bottom'>
                  Водитель
                </h2>

                <div className='align-items-center'>
                  <h5 className='fw-bold'>Константин Константинов</h5>
                  <p className='small m-0'>konstantinkonstantinov@yahoo.com</p>
                  <p className='small m-0'>+ 7 904 767-13-27</p>
                </div>
              </div>
            </div>

            <form>
              <input
                type='submit'
                className='btn btn-primary rounded-pill mt-2'
                value='Перейти к оплате'
              />
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Rent;
