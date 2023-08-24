import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'



const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false);

    const handleClick = () =>{
        setNav(!nav);
        setLogo(!logo);
    }

  return (
    // <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
    //     <div ><h1 className={logo? 'hidden' : 'block'}>BEACHES.</h1></div>

    //     <ul className='hidden md:flex'>
    //         <li>     Home       </li>
    //         <li>     Destination       </li>
    //         <li>     Travel       </li>
    //         <li>     Book       </li>
    //         <li>     View       </li>
    //     </ul>

    //     <div className="hidden md:flex">
    //     <i><FontAwesomeIcon icon={faAddressCard} /></i>
    //     <i><FontAwesomeIcon icon={faMagnifyingGlass} /></i>
    //     </div>

    //     {/* Bar Logo */}
    //     <div className=' md:hidden ' onClick={handleClick}>
    //         <i> {nav ? <FontAwesomeIcon icon={faXmark} />:<FontAwesomeIcon icon={faBars} />  }</i>
    //     </div>

    // {/* Mobile Menu */}
    //     <div onClick={handleClick} className={nav ? 'absolute left-0 top-0 w-full bg-grey-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
    //     <ul>
    //         <h1>BEACHES.</h1>
    //         <li className='border-b'>     Home       </li>
    //         <li className='border-b'>     Destination       </li>
    //         <li className='border-b'>     Travel       </li>
    //         <li className='border-b'>     Book       </li>
    //         <li className='border-b'>     View       </li>

    //         <div className='flex flex-col'>
    //         <button className='my-5'>Search</button>
    //         <button>Account</button>
    //         </div>

            

    //     </ul>
    //     </div>
    // </div>
    
    //Navbar container

   

        <div className='absolute flex justify-between items-center w-full  my-3 rounded-xl z-10 text-white'>

            <div className={!logo ? 'p-2 m-1 rounded-[20px] ' : 'hidden' }>
                <h2>
                    finhom.
                </h2>
            </div>

            <div>
                <ul className='hidden md:flex justify-between flex-1 w-[60%]'>
                    <li className='rounded-xl mx-1 flex justify-center items-center  hover:border '>Home</li>
                    <li className='rounded-xl mx-1 flex justify-center items-center  hover:border '>About</li>
                    <li className='rounded-xl mx-1 flex justify-center items-center  hover:border '>Packages</li>
                    <li className='rounded-xl mx-1 flex justify-center items-center  hover:border '>Book</li>
                </ul>
            </div>

            <div className='hidden md:flex px-4'>
                <i className='text-xl'><FontAwesomeIcon icon={faMagnifyingGlass} /></i>
                <i className='text-xl pl-2 ml-2'><FontAwesomeIcon icon={faAddressCard} /></i>
            </div>

            <div onClick={handleClick} className='px-2 md:hidden'>
                {!nav ? <i className='mr-4 text-xl'><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></i> : <i className='mr-4 text-xl'><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></i>}
            </div>
                

            <div className= {!nav ? ' bg-gray-200/50 absolute left-[-100%]':'absolute top-0 left-1.5 flex flex-col  mt-[15%] w-[96%] bg-gray-100 rounded-xl transition-all duration-300 ease-in-out bg-gray-500/50   md:hidden' }>
                <ul className='mx-3'>
                    <h2 className='px-4 py-3'>finhome.</h2>
                    <li className='text-center border-b mx-3 '>About</li>
                    <li className='text-center border-b mx-3'>Packages</li>
                    <li className='text-center border-b mx-3'>Book a Trip</li>
                    <li className='text-center border-b mx-3'> Testimonials</li>
                </ul>

                <button className='py-4 mx-3 my-3'><h3>Log-in</h3></button>
                <button className='py-4 mx-3 my-1'><h3>Sign-in</h3></button>
            </div>

        </div>

    
  
  
      )
}

export default Navbar