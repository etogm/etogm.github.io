import React from 'react';
import LocationCard from '../common/LocationCard';
import VehicleCard from '../common/VehicleCard';
import Question from './Question';

const Home = () => {
  const questions = [
    {
      id: 'question1',
      question: 'What are the driving licence requirements?',
      answer:
        'A full driving license will be required at the rental desk in order for you to rent a car, provisional (learners) driving licenses are not accepted for the rental.',
    },
    {
      id: 'question2',
      question: 'What are the driving licence requirements?',
      answer:
        'A full driving license will be required at the rental desk in order for you to rent a car, provisional (learners) driving licenses are not accepted for the rental.',
    },
    {
      id: 'question3',
      question: 'What are the driving licence requirements?',
      answer:
        'A full driving license will be required at the rental desk in order for you to rent a car, provisional (learners) driving licenses are not accepted for the rental.',
    },
  ];
  return (
    <div>
      <header>
        <div class='container pt-5 pb-5'>
          <div class='row'>
            <div class='col'>
              <h1 class='text-white text-shadow'>
                Недорогие автомобили в аренду
              </h1>
            </div>
            <div class='col'>
              <LocationCard />
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className='container'>
          <h2 className='fw-bolder pt-3 mb-2'>Транспорт</h2>
          <VehicleCard />
          <VehicleCard />
          <VehicleCard />
          <VehicleCard />
          <h2 className='fw-bolder pt-3 mb-2'>Часто задаваемые вопросы</h2>

          {questions.map(q => <Question key={q.id} question={q} />)}
        </div>
      </main>
    </div>
  );
};

export default Home;
