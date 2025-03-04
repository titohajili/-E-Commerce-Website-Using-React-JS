import React from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'

const PlaceOrder = () => {
  return (
    <div className='flex felx-col sm:-row justify-between gap-4 pt-5 sm:pt-14 min-h-[8vh] border-t'>
      {/* left side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'}  text2={'INFORMATION'} />
        </div>
        <div className='flex gap-3'>
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='First Name' type="text" />
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Last Name' type="text" />
        </div>

            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Email address' type="email" />
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Street Address' type="text" />

        <div className='flex gap-3'>
           <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='City' type="text" />
           <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='State' type="text" />
         </div>

         <div className='flex gap-3'>
           <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Zip Code' type="number" />
           <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Contry' type="text" />
         </div>

         <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Phone' type="number" />

      </div>

      {/* right side */}

      <div className='mt-8'>

        <div className='mt-8 min-w-80'>
            <CartTotal/>
        </div>

        <div className='mt-12'>
            <Title text1={'PAYMENT'}  text2={'METHOD'} />
            <div className='flex gap-3 flex-col flex-row'>

            </div>
        </div>

      </div>

      

    </div>
  )
}

export default PlaceOrder
