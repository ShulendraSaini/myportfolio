import React from 'react'
import aboutImg from "../assets/about4.jpeg";

const About = () => {
  return (
    <div className=' py-10 text-white bg-[#232325] h-auto' id='about'>
      <div className='flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auot'>
        <div>
           <div className='w-[400px] h-full'>
              <img src={aboutImg} alt="" 
              className='object-cover rounded-xl h-[300px] filter  grayscale brightness-50'/>
           </div>
        </div>
        <div>
            <div className='p-2'>
               <div className='text-gray-300 my-3'>
                <h3 className='text-4xl font-semibold mb-5'>About<span className='primary-text'>Me</span></h3>
                 <p className='text-justify leading-7 -11/12 mx-auto'>
                 Hello, I'm Shulendra Saini, a front-end developer. I have a passion for building innovative web applications. I completed my Btech in Computer Science & Engineering from Graphic Era Hill University Bhimtal .<br/>I have knowledge of HTML, CSS, JavaScript, React, SQL, and Git, and I'm always looking to expand my skill set. Eager to leverage this comprehensive skill set and contribute to innovative projects in the dynamic field of web development.
                 </p>
               </div>
            </div>
            <div className='flex mt-10 items-center gap-7'>
                <div className='bg-[#333333]/40 p-5 rounded-lg'>
                    <h3 className='md:text-4xl text-2xl font-semibold text-white'>4
                    <span className='primary-text'>+</span>{" "}
                    </h3>
                    <p><span className='md:text-base text-xs'>Project</span></p>
                </div>
                <div className='bg-[#333333]/40 p-5 rounded-lg'>
                    <h3 className='md:text-4xl text-2xl font-semibold text-white'>1 month
                    <span className='primary-text'>+</span>{" "}
                    </h3>
                    <p><span className='md:text-base text-xs'>Internship Exp.</span></p>
                </div>
               

            </div>
        </div>
      </div>
    </div>
  )
}

export default About
