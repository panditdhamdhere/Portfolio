import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-5xl sm:text-7xl text-white font-bold'>I am Front-End Web Developer</h2>
          <p className='text-white py-4'>Hello, I am self taught passionate front end web developer</p>
          <div>
            <button className='group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer '>
              Scroll Down
              <span className='group-hover:rotate-90 duration-300'><MdKeyboardArrowRight /></span>
              
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
