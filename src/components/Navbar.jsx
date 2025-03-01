import React from 'react'

export default function Navbar() {
  return (
    <nav className='px-5 h-20 drop-shadow-[6px]'>
        <div className='flex w-full h-20 items-center justify-between'>
            <p className='font-semibold text-lg'>OPT/CI</p>
            <ul className='flex items-center gap-10 text-white/60'>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
            </ul>
            <button className='font-semibold px-6 py-2 bg-[#D3FFCA] text-black shadowcustom rounded-3xl '>
                Analyze Now
            </button>
        </div>
    </nav>
)
}
