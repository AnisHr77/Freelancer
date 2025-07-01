'use client'
import React from 'react'
type ButtonProps = {
  onClick: () => void; // no args, returns nothing
};
interface questions {
  title: String,
  desc: String,
  Q1: String,
  Q2: String,
  Q3: String,
  value: String,
  onClick :ButtonProps,
}

const Questionspart1 = ({ title, desc, Q1, Q2, Q3, value,onClick }: questions, ) => {

  return (
    <div className=' '>
      <div className="flex flex-col pl-10 pt-10 justify-center gap-10">
        <p className='font-bold text-[30px]'>{title}</p>
        <p className='text-[16px]'>{desc}</p>
        <form className='flex flex-col gap-4'>

          <label>{Q1}</label>
          <input
            type="text"
            name='answer1'
            placeholder='Put your answer here'
            className='w-100 h-10 rounded-[5px] border pl-2 outline-none'
            required
          />

          <label>{Q2}</label>
          <input
            type="text"
            name='answer2'
            placeholder='Put your answer here'
            className='w-100 h-10 rounded-[5px] border pl-2 outline-none'
            required
          />

          <label>{Q3}</label>
          <input
            type="text"
            name='answer3'
            placeholder='Put your answer here'
            className='w-100 h-10 rounded-[5px] border pl-2 outline-none'
            required
          />

          <button
            type='submit'
            className='w-30 h-10 rounded-[5px] bg-[#007AFF] ml-120 mt-10 text-white font-bold cursor-pointer'
            onClick={onClick}
          >{value}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Questionspart1