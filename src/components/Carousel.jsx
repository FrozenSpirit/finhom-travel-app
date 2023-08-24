import React from 'react'
import IMG1 from '../assets/1.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Carousel = () => {
    
  return (

  <div className='flex flex-col w-[600px] h-[300px] relative top-[300px] shadow-xl border'>

    <i className='px-4 absolute top-[45%] left-[20px]  z-10 text-2xl text-white rounded-full bg-gray-500/10'><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></i>
    <i className='px-4 absolute top-[45%] right-[20px]  z-10 text-2xl text-white rounded-full bg-gray-500/10'><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></i>
    <img className ='absolute top-0 left-0 h-full w-full object-cover rounded-xl z-0' src={IMG1} alt='*'></img>
  </div>























    // <div className="w-full h-screen absolute top-0 left-0">
    //     <iframe width="560" height="315" src="https://www.youtube.com/watch?v=5XVoRGhrhZk" title="YouTube video player" frameborder="0" allow="accelerometer; 
    //     autoplay; 
    //     clipboard-write; 
    //     encrypted-media; 
    //     gyroscope; 
    //     picture-in-picture" allowfullscreen></iframe>
    // </div>
  )
}

export default Carousel