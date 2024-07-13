import React from 'react'

const Contact = () => {
  return (
    <div className='flex justify-center my-5 h-full sm:h-[70vh] items-center' id='contact'>
        <div className='max-w[1200px] mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='p-6 mr-2 bg-gray-800 rounded-xl flex-col justify-around'>
                    <h1 className='text-4xl sm:text-5xl text-white'> 
                      Contact <span>Me</span>
                    </h1>
                    <br />
                    <p className='text-normal text-lg font-medium text-gray-400 mt-2 '>
                       Lets connect on LinkedIn <br /> or send me an email
                       <br />
                       <br />
                    <p className='text-2xl'>Shulendra Saini</p>
                    <p>Contact: 9027088948</p>
                    </p>
                    <br />
                    
                    <div className='flex items-center mt-2 text-gray-400'>
                        
                     {/* <svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={}>

                     </svg> */}
                      <div className='ml-4 text-md tracking-wide w-70 '>
                       
                       </div>
                    </div>
                </div>

                <form action="https://getform.io/f/nbdoydla" method='post' className='p-6 flex flex-col justify-center max-w-[700px'>
                  <div className='flex flex-col'>
                    <input type="name" name='name' id='name' placeholder='Full-name' className='w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white' />
                  </div>
                  <div className='flex flex-col mt-2'>
                    <input type="email" name='email' id='email' placeholder='Email' className='w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white' />
                  </div>
                  <div className='flex flex-col mt-2'>
                    <textarea name='massage' id='massage' placeholder='Your Message' className='w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white'></textarea>
                  </div>

                <button type='submit' className='md:w-32 bg-primary-color text-white py-3 px-6 rounded-lg mt-3'>
                  Submit
                </button>
                </form>

            </div>

        </div>
      
    </div>
  )
}

export default Contact
