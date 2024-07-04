import React from 'react'

const AddMoney = ({AddMoneyBox , name ,date, things ,time ,totalMoney ,split   }) => {

  return (
    <div className='h-[62.5vh] bg-[#A327F0] flex justify-center flex-col  items-center w-[100vw]'>
     
     <div className='h-[50vh] flex flex-col gap-8  w-full px-2 py-6 '>
      <div className='flex gap-2'>
      <input type="text" placeholder='name' value={name} className='py-1 px-2' />
      <input type="text" placeholder='date' value={date}  className='py-1 px-2 w-[30vw]' />
      </div>
      <div className='flex gap-2'>
      <input type="text" placeholder='things' value={things}  className='py-1 px-2' />
      <input type="text" placeholder='time' value={time}  className='py-1 px-2 w-[30vw]' />
      </div>
      <div className='flex gap-2'>
      <input type="text" placeholder='total money' value={totalMoney}  className='py-1 px-2' />
      <input type="text" placeholder='split' value={split}  className='py-1 px-2 w-[30vw]' />
      </div>
     </div>

<button className='bg-white px-5 py-[6px] text-[1.1rem]' onClick={AddMoneyBox}>save</button>


    </div>
  )
}

export default AddMoney
