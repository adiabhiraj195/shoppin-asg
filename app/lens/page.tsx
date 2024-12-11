"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Logo from "@/assets/color-logo.png"
import sampleImg from "@/assets/mock/_.jpeg"
import LensButton from '@/components/lens-buttons'
import ImageGrid from '@/components/imageGrid'

export default function LensSearchPage() {
    const [activeButton, setActiveButton] = useState<"search" | "text" | "translate">("search")
    return (
        <div className='w- bg-white h-screen overflow-hidden'>
            <div className='w-full flex justify-between items-centerp p-3 shadow-sm fixed top-0 left-0 z-10 bg-white'>

                <span className='group px-1 cursor-pointer flex items-center relative'>
                    <Image src={Logo} width={84} alt='' />
                    <span className='opacity-0 group-hover:opacity-100 transition-opacity absolute top-10 right-0 bg-hGray border-hGray border-1 w-16 text-[12px] font-bold py-1 flex justify-center rounded'>
                        Google
                    </span>
                </span>

                <div className='flex'>
                    <span className='group px-1 cursor-pointer flex items-center relative'>
                        <button className='flex items-center text-gray-600 text-sm mx-6 hover:bg-gray-100 px-2 rounded-md'>
                            <span className='mr-1'>
                                <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" className=" NMm5M"><path d="M4 15h2v3h12v-3h2v3c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2m4.41-7.59L11 7.83V16h2V7.83l2.59 2.59L17 9l-5-5-5 5 1.41 1.41z"></path></svg>
                            </span>
                            Upload
                        </button>
                        <span className='opacity-0 group-hover:opacity-100 transition-opacity absolute top-10 -right-12 min-w-fit bg-hGray border-hGray border-1 px-2 text-[12px] font-bold py-1 flex justify-center rounded'>
                            Upload an image to search
                        </span>
                    </span>


                    <a className='mx-1 p-2 rounded-full transition-colors hover:bg-gray-200' href='#'>
                        <img className='text-col ' src="https://ssl.gstatic.com/gb/images/bar/al-icon.png" alt="" height="24" width="24"></img>
                    </a>
                    <a className='mx-1 p-1 rounded-full transition-colors hover:bg-gray-200 flex justify-center items-center' href='#'>
                        <div className='w-8 h-8 rounded-full bg-blue-700 flex justify-center items-center'>
                            A
                        </div>
                    </a>
                </div>
            </div>

            <div className='w-full flex justify-evenly h-full relative md:flex-col lg:flex-row'>

                <div className='bg-bgGray w-1/2 flex flex-col justify-between items-center pt-[96px] px-8 pb-8'>
                    <span className='group px-1 cursor-pointer flex items-center relative'>
                        <div className=' flex items-center px-4 py-2 rounded-3xl border border-gray-500 font-semibold hover:bg-buttonGray cursor-pointer'>
                            <span className='invert mr-2'>
                                <svg enableBackground="new 0 0 24 24" height="18" viewBox="0 0 24 24" width="18" focusable="false" className="VTbk7c NMm5M"><rect fill="none" height="24" width="24"></rect><path d="M19.3,16.9c0.4-0.7,0.7-1.5,0.7-2.4c0-2.5-2-4.5-4.5-4.5S11,12,11,14.5s2,4.5,4.5,4.5c0.9,0,1.7-0.3,2.4-0.7l3.2,3.2 l1.4-1.4L19.3,16.9z M15.5,17c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5S16.9,17,15.5,17z M12,20v2 C6.48,22,2,17.52,2,12C2,6.48,6.48,2,12,2c4.84,0,8.87,3.44,9.8,8h-2.07c-0.64-2.46-2.4-4.47-4.73-5.41V5c0,1.1-0.9,2-2,2h-2v2 c0,0.55-0.45,1-1,1H8v2h2v3H9l-4.79-4.79C4.08,10.79,4,11.38,4,12C4,16.41,7.59,20,12,20z"></path></svg>
                            </span>
                            Find image source
                        </div>
                        <span className='opacity-0 group-hover:opacity-100 delay-150 transition-opacity absolute top-11 -right-4 w-[230px] bg-hGray border-hGray border-1 px-2 text-[12px] py-1 flex justify-center rounded'>
                            See web pages that include this image
                        </span>
                    </span>

                    <div>
                        <Image src={sampleImg} alt='' />
                    </div>

                    <LensButton active={activeButton} setActive={setActiveButton} />
                </div>

                <div className='w-1/2 pt-[96px] overflow-scroll'>
                    <ImageGrid />
                </div>
            </div>
        </div>
    )
}
