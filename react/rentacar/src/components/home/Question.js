import React from 'react';

const Question = ( { id, question } ) => {
  return (
    <div className='mt-2 mb-2'>
      <button
        className='btn border-bottom text-start p-0 fw-bold text-primary w-100'
        data-bs-toggle='collapse'
        data-bs-target={`#${question.id}`}
      >
        {question.question}
      </button>
      <div className='collapse' id={question.id}>
        <div>
          {question.answer}
        </div>
      </div>
    </div>
  );
};

export default Question;
