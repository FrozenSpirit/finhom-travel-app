import React from 'react'
import VID1 from '../assets/footer.mp4'

const Footer = () => {
  return (
    
    <div className='mt-3 relative w-full pb-16 md:h-[500px] bg-pink-300 flex flex-col md:flex-row '>
        
        <video src={VID1} className='absolute top-0 left-0 object-cover h-full w-full z-0' autoPlay muted loop></video>
        
        <div className='w-[90%] m-4 h-1/3  z-10 flex flex-col  md:h-[80%] text-white bg-gray-400/60 rounded-xl'>

            <div className='m-6 flex flex-col justify-center '>
                <h2 className=' md:mt-5'>About us.</h2>
                <p className='line-clamp-5 md:line-clamp-10 text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, aliquam dignissimos quis laborum quos eaque! Recusandae vero dolorem tempora velit nobis earum, incidunt ipsam quisquam qui illum aperiam sit voluptate.
                
                
                corrupti. Facere, esse enim blanditiis ab provident perferendis dicta ipsa nostrum optio laborum ipsam obcaecati molestias eos reiciendis. Tenetur, saepe odio?</p>
            </div>
            
        </div>
        <div className='w-[90%] m-2 h-2/3  z-10  flex flex-col md:justify-center md:text-center ali'> 

            <div className='text-center text-white my-[10%]'><h2>For more information</h2></div>
            
            <div className='ml-2 relative max-w-[500px] bg-white rounded-lg text-black lg:ml-[15%] flex flex-col justify-center'>

                <input type='text' className='bg-transparent px-2 border-none w-[90%] h-[40px] rounded-lg text-black focus:outline-none md:w-[60%] ' placeholder='type your email'></input>

                <button className='h-[40px] flex justify-center items-center absolute right-0'> Send</button>
            </div>

        </div>

    </div>
  )
}

export default Footer