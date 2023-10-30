import React from 'react'

const Navbar=() => {
    return (
        <div className='w-full flex gap-x-8 bg-slate-700 items-center p-5'>
            <a className='text-white text-[16px]' href="/">Client Panel</a>
            <a className='text-white text-[16px]' href="/clients">Clients</a>
        </div>
    )
}

export default Navbar