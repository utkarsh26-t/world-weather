import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='h-screen flex'>
        <img className='h-full' src='https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='img'/>
        <div className='p-4 flex flex-col justify-center bg-neutral-950 grow gap-2'>
            <h1 className='text-5xl font-semibold text-cyan-100'>World Weather</h1>
            <Link to="/countries" className='rounded shadow bg-white p-1 font-semibold'>
                SEE WEATHER {">>>"}
            </Link>
        </div>
        
    </div>
  )
}

export default HomePage