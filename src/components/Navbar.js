import React from 'react'

const Navbar = () => {
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
  <h1 className='text-4xl font-semibold text-blue-500'>Pandit</h1>
</div>
<ul className='flex'>
  {links.map(({id, link }) => (
    <li key={id} 
    className='px-4 cursor-pointer capitalize font-medium text-blue-500 hover:scale-110 duration-200'>{link}</li>
  ))}
</ul>
 </div>
 </>
  )
}

export default Navbar
