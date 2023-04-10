import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/MD'

export default function TopBody() {
  return (
    <div  className=' bg-blue-950'>

    <section className="md:flex  ">
      {/* left */}
      <div className='flex justify-center'> 
        <img
          src="https://images.unsplash.com/photo-1610041321420-a596dd14ebc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="profilepic"
          className="p-4 items-center md:w-40 h-40 object-cover rounded-full  "
        />
      </div>
      {/* left */}

      {/* right */}
      <div className="p-5 max-w-xl  ">
        <h1 className="text-white font-bold text-lg mb-4">
          I am a Full Stack developer
        </h1>
        <p className="text-white mb-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima,
          sapiente. Vero sit qui doloremque ex ratione consequatur cumque
          quidem, tempore autem quos totam veniam dicta quaerat nesciunt
          voluptatibus pariatur exercitationem, ipsam hic? Obcaecati cumque
          provident facilis aliquid rem ducimus, molestiae repudiandae
          reiciendis ullam harum dolores magni? Et unde ratione quam.
        </p>
        <button className="group flex  items-center bg-gradient-to-r from-cyan-500 to-blue-500  py-2 px-4 rounded-lg ">
          Profile
          <MdOutlineKeyboardArrowRight className="group-hover:rotate-90 duration-500" />
        </button>
      </div>
      {/* right */}
    </section>
    </div>
  )
}
