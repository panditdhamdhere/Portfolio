import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'


const Navbar = () => {

  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'about'
    },
    {
      id: 3,
      link: 'contact'
    },
    {
      id: 4,
      link: 'blog'
    }
  ]

  return (
    <>
      <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
        <div>
          <h1 className='text-4xl font-semibold text-blue-500 font-mono'>Pandit</h1>
        </div>
        <ul className='hidden md:flex '>
          {links.map(({ id, link }) => (
            <li key={id}
              className='px-4 cursor-pointer capitalize font-medium text-lg text-blue-500 hover:scale-110 duration-200'><Link to={link}smooth duration={500}>{link}</Link></li>
          ))}
        </ul>

        <div onClick={() => setNav(!nav)} className='cursor-pointer p-4 z-10 text-blue-500 md:hidden'>
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {
          nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from black to bg-gray-800 text-blue-500'>
              {links.map(({ id, link }) => (
                <li key={id}
                  className='px-4 cursor-pointer  py-6 text-4xl capitalize'><Link onClick={() => setNav(!nav)} to={link}smooth duration={500}>{link}</Link></li>
              ))}
            </ul>
          )}

      </div>
    </>
  )
}

export default Navbar
