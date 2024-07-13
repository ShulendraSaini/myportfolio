import React from 'react'
import proj1 from '../assets/proj1.png'
import proj2 from '../assets/proj2.png'
import proj3 from '../assets/proj3.png'
import proj4 from '../assets/proj4.png'

const Work = () => {
  return (
    <div className='py-6 max-w-[1200px] mx-auto' id='work'>
        <div className='mx-auto px-4 md:px-8'>
            <div className='mb-4 flex items-center justify-between gap-8'>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-2xl lg:text-3xl text-white'>
                      My<span>Projects</span>
                    </h2>
                    <p className='text-gray-500'>
                        These are my latest projects in different technology
                    </p>

                </div>

            </div>

        </div>
        <div className='grid gap-4 grid-cols-2  sm:grid-cols-span-2 md:gap-6 xl:gap-8'>
          {/* <h1 className='text-white'>Booking app</h1> */}
         <a href="https://booking-app-shulendrasaini.vercel.app/" className='group h-48 overflow-hidden rounded-lg shadow-lg md:h-80'>
            <img src={proj1} alt="" className='h-full w-full object-cover object-center transition duration-200 
                                               group-hover:scale-110' />
         </a>
        
         {/* <a href="/" className='group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80'>
            <img src={proj4} alt="" className='h-full w-full object-cover object-center transition duration-200 
                                               group-hover:scale-110' />
         </a>
         <a href="/" className='group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80'>
            <img src={proj3} alt="" className='h-full w-full object-cover object-center transition duration-200 
                                               group-hover:scale-110' />
         </a> */}
         <a href="https://shulendrasaini-react-gymwebsite.netlify.app/" className='group h-48 overflow-hidden rounded-lg shadow-lg md:h-80'>
            <img src={proj2} alt="" className='h-full w-full object-cover object-center transition duration-200 
                                               group-hover:scale-110' />
         </a>
         <a href="https://shulendrasaini-pexel-clone.netlify.app/" className='group h-48 overflow-hidden rounded-lg shadow-lg md:h-80'>
            <img src={proj3} alt="" className='h-full w-full object-cover object-center transition duration-200 
                                               group-hover:scale-110' />
         </a>
         <a href="https://shulendrasaini-react-invoice.netlify.app" className='group h-48 overflow-hidden rounded-lg shadow-lg md:h-80'>
            <img src={proj4} alt="" className='h-full w-full object-cover object-center transition duration-200 
                                               group-hover:scale-110' />
         </a>
        </div>
      
    </div>
  )
}

export default Work
