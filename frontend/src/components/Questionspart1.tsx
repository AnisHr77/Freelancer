'use client'
import React from 'react'
type ButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
interface questions {
  title: String,
  desc: String,
  Q1: String,
  Q2: String,
  Q3: String,
  value: String,

}
type Questioncard = questions & ButtonProps;

const Questionspart1 = ({ title, desc, Q1, Q2, Q3, value, onClick }: Questioncard) => {

  return (
    <div className=' '>
      <p className=' logo text-[35px] absolute ml-4 mt-4 font-bold text-[#007AFF]'>GitNotaion</p>
      <div className="flex flex-col items-center pl-10 pt-15 justify-center gap-10">
        <p className='font-bold text-[30px]'>{title}</p>
        <p className='text-[16px]'>{desc}</p>
        <form className='flex flex-col gap-4'>

          <label>{Q1}</label>
          <input
            type="text"
            name='answer1'
            placeholder='Put your answer here'
            className='w-full max-w-150 min-w-80 h-10 rounded-[5px] border pl-2 outline-none'
            required
          />

          <label>{Q2}</label>
          <input
            type="text"
            name='answer2'
            placeholder='Put your answer here'
            className=' w-full max-w-150 min-w-80 h-10 rounded-[5px] border pl-2 outline-none'
            required
          />

          <label>{Q3}</label>
          <input
            type="text"
            name='answer3'
            placeholder='Put your answer here'
            className='w-full min-w-80 max-w-150  h-10 rounded-[5px] border pl-2 outline-none'
            required
          />
          <div className="flex gap-90  mt-10">
            <button
              className='w-30 h-10 rounded-[5px] bg-[#007AFF]     text-white font-bold cursor-pointer'
              onClick={onClick}
            >Back
            </button>
            <button
              type='submit'
              className='w-30 h-10 rounded-[5px] bg-[#007AFF]    text-white font-bold cursor-pointer'
              onClick={onClick}
            >{value}
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Questionspart1