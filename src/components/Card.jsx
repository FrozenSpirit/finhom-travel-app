import React from 'react'
import IMG1 from '../assets/4.jpeg'

const Card = (item) => {
    console.log("hello")
  return (
    
    <div className='w-[300px] h-[400px] border flex flex-col justify-between rounded-xl overflow-hidden my-3'>

        
            <div className="h-[40%] w-full transition-all duration-300 ease-in-out hover:scale-110">
                <img src={IMG1} className='rounded-t-xl object-cover h-full w-full hover:cursor-pointer'></img>
            </div>

            <div className='border-b my-2 mx-2 text-left'>
                <h2>{item.title}</h2>
                <h3 className='mb-2'> {item.location}</h3>
            </div>

            <div className='mx-2 my-2 line-clamp-3 text-left'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, quisquam accusamus atque nesciunt suscipit quidem doloribus, iure harum minus commodi nam sequi debitis laboriosam ea eligendi eius accusantium id! Ab!</p>
            </div>

            <div className='m-3 ml-6 mb-3 text-left '>
                <button className='py-2 px-5 transition-all duration-200 ease-in-out hover:scale-110'>Details</button>

            </div>
    </div>
  )
}

export default Card