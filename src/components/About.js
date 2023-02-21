import React from 'react'

const About = () => {
    return (
        <div name ="about" className='p-96 w-full h-screen bg-gradient-to-b from bg-gray-800 to to-black  text-white'>
            <div className='max-w-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nulla dolore explicabo voluptate aspernatur quibusdam a ut amet dolor, modi veniam, quam vel accusantium distinctio saepe dicta omnis perspiciatis iste?</p>
                <br />

                <p className='text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit hic inventore officia debitis laborum provident obcaecati omnis cumque! Voluptatum necessitatibus id expedita eaque velit dolor laudantium in hic sequi accusamus.</p>
            </div>
        </div>
    )
}

export default About
