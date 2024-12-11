import React from 'react'

export default function Header() {
    return (
        <div className='flex px-4 py-2 justify-between items-center font-semibold'>
            <div>
                <a href='#' className='mx-2 hover:underline text-sm'>About</a>
                <a href='#' className='mx-2 hover:underline text-sm'>Store</a>

            </div>

            <div className='flex justify-center items-center'>
                <a href='#' className='mx-2 hover:underline text-sm'>Gmail</a>
                <a href='#' className='mx-2 hover:underline text-sm'>Images</a>

                <span className='group px-1 cursor-pointer flex items-center relative'>
                    <a className='mx-1 p-2 rounded-full transition-colors hover:bg-hGray' href='#'>
                        <img className='text-col invert' src="https://ssl.gstatic.com/gb/images/bar/al-icon.png" alt="" height="24" width="24"></img>
                    </a>
                    <span className='opacity-0 group-hover:opacity-100 transition-opacity absolute top-11 -right-5 w-24 bg-hGray border-hGray border-1 px-1 rounded-md text-[12px] font-bold py-1 flex justify-center'>
                        Google apps
                    </span>
                </span>
                <a className='mx-1 p-1 rounded-full transition-colors hover:bg-hGray flex justify-center items-center' href='#'>
                    <div className='w-8 h-8 rounded-full bg-blue-700 flex justify-center items-center'>
                        A
                    </div>
                </a>
            </div>
        </div>
    )
}
