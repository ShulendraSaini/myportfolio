import React from 'react'
import {FaGithubSquare, FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='mt-12 w-max-[800px] border-t border-gray-500 text-center'>
        <p className='my-5 text-gray-500'>Shulendra  Saini <br />Copyright © 2024. All rights are reserved</p>
        <div className='inline-flex text-gray-500 gap-4 text-3xl'>
            <a href="https://github.com/ShulendraSaini"><FaGithubSquare/></a>
            <a href="https://www.instagram.com/shulendra.saini/"><FaInstagram/></a>
            
        </div>
      
    </div>
  )
}

export default Footer
