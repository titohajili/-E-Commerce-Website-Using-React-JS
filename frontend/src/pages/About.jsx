import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'}  text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio animi earum quisquam amet, minima dolores pariatur aliquid praesentium quia voluptatum? Iste dolores cum sapiente, minus quisquam iusto nam aut maiores, in officiis ipsam quibusdam corrupti. Ad cupiditate culpa voluptas ipsam minima veniam consequuntur placeat dicta?</p>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae harum sit numquam quae fugiat dolor sapiente neque. Sit quaerat repudiandae, deserunt totam voluptatem, mollitia reprehenderit illum aspernatur non vero doloribus quia porro, suscipit eum! Aspernatur quae eius possimus perferendis, ut facere suscipit optio, labore debitis impedit qui tempora enim hic, eum esse minus eos in.</p>

              <b className='text-gray-800'>Our Mission</b>

              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, veniam consequatur excepturi quos illum ex, praesentium fuga et ipsa consectetur commodi. Voluptate vero quo reprehenderit aperiam consequatur tenetur.</p>
          </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={'WHY'}  text2={'CHOOSE'} />
      </div>

      <div className='flex felx-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo labore ducimus dicta cumque perspiciatis facere nam praesentium id.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo labore ducimus dicta cumque perspiciatis facere nam praesentium id.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo labore ducimus dicta cumque perspiciatis facere nam praesentium id.</p>
        </div>

      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
