import React from 'react'
import sunset from '../assets/vid2.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  return (

    <div className='relative w-full h-screen'>

      <video  className='object-cover w-full h-full' src={sunset} autoPlay muted loop></video>

      <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center text-white">

            <h2>Search Your Dream Vacation</h2>
            <h3> Best Holidays At Affordable Price</h3>

            <div className='flex h-[50px] max-w-[700px] bg-gray-100 rounded-lg justify-between m-3 mr-4 items-center'>
              <input type='text' className='border-none focus:outline-none w-[300px] h-full bg-transparent text-black sm:w-[400px] mx-2 px-2' placeholder='  Search'></input>
              
              <i className='text-black text-xl m-1 hover:cursor-pointer bg-gray-200 px-4 rounded-lg'>
                <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
              </i>
            </div>

      </div>

    </div>
  )
}

export default Hero