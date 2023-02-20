import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import git from '../assets/git.png'
import github from '../assets/github.png'
import nextjs from '../assets/nextjs.png'
import reactjs from '../assets/react.png'
import tailwindcss from '../assets/tailwind.png'


const Techstack = () => {

    const stack = [
        {
            id: 1,
            src: html,
            title: 'HTML5',
            style: 'shadow-orange-500'
        },

        {
            id: 2,
            src: css,
            title: 'CSS3',
            style: 'shadow-blue-500'
        },

        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },

        {
            id: 4,
            src: tailwindcss,
            title: 'Tailwind CSS',
            style: 'shadow-sky-500'
        },

        {
            id: 5,
            src: reactjs,
            title: 'ReactJS',
            style: 'shadow-blue-500'
        },

        {
            id: 6,
            src: nextjs,
            title: 'NextJS',
            style: 'shadow-white-500'
        },

        {
            id: 7,
            src: git,
            title: 'Git',
            style: 'shadow-orange-500'
        },

        {
            id: 8,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-500'
        }
    ]

    return (
        <div name="techstack" className='bg-gradient-to-b from bg-gray-800 to to-black w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
                        Tech Stack
                    </p>
                    <p className='py-6'>These are technologies I have been working with...</p>
                </div>


                <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                    {
                        stack.map(({ id, src, title, style }) => (
                            <div
                            key={id}
                        className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} alt="techstack" className='w-20 mx-auto' />
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Techstack
