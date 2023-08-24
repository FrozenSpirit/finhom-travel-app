import React from 'react'
import IMG1 from '../assets/1.jpeg'
import IMG2 from '../assets/2.jpeg'
import IMG3 from '../assets/3.jpeg'
import IMG4 from '../assets/4.jpeg'
import IMG5 from '../assets/5.jpeg'
import Card from './Card'


const Destinations = () => {

    const info = [{
      title : "Bali",
      location : "Maldives",
      desc : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, quisquam accusamus atque nesciunt suscipit quidem doloribus, iure harum minus commodi nam sequi debitis laboriosam ea eligendi eius accusantium id! Ab!'
    },
    {
      title : "Bali",
      location : "Maldives",
      desc : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, quisquam accusamus atque nesciunt suscipit quidem doloribus, iure harum minus commodi nam sequi debitis laboriosam ea eligendi eius accusantium id! Ab!'
    },
    {
      title : "Bali",
      location : "Maldives",
      desc : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, quisquam accusamus atque nesciunt suscipit quidem doloribus, iure harum minus commodi nam sequi debitis laboriosam ea eligendi eius accusantium id! Ab!'
    }]

  return (
    // <div className='max-w-[1240px] mx-auto text-center py-16 px-4'>
    //     <h1>Our Top Picks</h1>
    //     <p>Hawaii, Heaven on Earth</p>
    //     <div className='grid grid-rows-none md:grid-cols-5 gap-2 md:gap-3 py-3'>
    //         <img className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2 rounded-xl" src={IMG1} alt='hawaii'></img>
    //         <img className="w-full h-full object-cover rounded-xl " src={IMG2} alt='hawaii'></img>
    //         <img className="w-full h-full object-cover rounded-xl" src={IMG3} alt='hawaii'></img>
    //         <img className="w-full h-full object-cover rounded-xl" src={IMG4} alt='hawaii'></img>
    //         <img className="w-full h-full object-cover rounded-xl" src={IMG5} alt='hawaii'></img>
    //     </div>

    // </div>

    <div>
      <div className='  max-w-[1240px] mx-auto text-center py-12 px-4 flex-col'>
        <h1>Our Top Picks</h1>
        <p>Bali, The Ultimate Holiday Destination for Couples</p>

        <div className='grid grid-rows-none gap-2 md:grid-cols-5 md:gap-3 py-2'>
          <img className='w-full h-full  object-cover col-span-2 row-span-2 md:col-span-3  rounded-xl' src={IMG3} alt='*'></img>
          <img className='w-full h-full  object-cover   rounded-xl' src={IMG1} alt='*'></img>
          <img className='w-full h-full  object-cover   rounded-xl' src={IMG2} alt='*'></img>
          <img className='w-full h-full  object-cover   rounded-xl' src={IMG4} alt='*'></img>
          <img className='w-full h-full  object-cover   rounded-xl' src={IMG5} alt='*'></img>
          
        </div>

       

      
      </div>
    
    <div className='w-full h-10 md:h-12 text-center '>
      <h2>Packages We Offer</h2>
    </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full justify-center gap-3 lg:ml-7'>
           
           <Card item={info[0]}/>
           <Card item={info[0]}/>
           <Card item={info[0]}/>
           <Card item={info[0]}/>
           <Card item={info[0]}/>
           <Card item={info[0]}/>
           <Card item={info[0]}/>
           <Card item={info[0]}/>
        
            
        </div>
    </div>
      


    
  )
}

export default Destinations