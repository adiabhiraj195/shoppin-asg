"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Mic from "@/assets/mic.png"
import Lens from "@/assets/lens.png"
import useDebouncedApiCall from './debounceApi'
import VoiceListeningUI from './voice-search'
import ImageSearchUI from './image-search'

export default function SearchBar() {
    const [isFocused, setIsFocused] = useState(false)
    const [inputValue, setInputValue] = useState("")
    const [searchSug, setSearchSug] = useState<{ value: string }[] | null>(null)
    const [toggleVoice, setToggleVoice] = useState(false)
    const [toggleImage, setToggleImage] = useState(false)

    const callApi = async () => {
        // console.log("API called with:", inputValue);
        try {
            const response = await fetch(`https://api.addsearch.com/v1/suggest/${process.env.SUG_KEY}?term=${inputValue}`)
            const result = await response.json()
            // console.log(result);
            setSearchSug(result?.suggestions)

        } catch (error) {
            console.log(error)
        }

    };

    useDebouncedApiCall(inputValue, 500, callApi);

    return (
        <div className='absolute top-0 left-1/2 -translate-x-1/2'>
            <div className={`relative rounded-3xl ${isFocused ? 'bg-[#303135]' : 'bg-[#4e5156]'}`}>
                <div className={`mx-4 flex justify-between py-[11px] ${(isFocused && searchSug) && 'border-b border-gray-400'}`}>
                    {/* <Image src={Search} width={25} alt='' /> */}
                    <span className='w-5 flex items-center'>
                        <svg className='invert w-25' focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                    </span>
                    <input
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        className='bg-transparent w-[500px] font-bold px-2 outline-none'
                        value={inputValue}
                        onInput={(e: any) => setInputValue(e.target.value)}
                    />

                    {inputValue != "" &&
                        <span onClick={() => setInputValue("")} className='pr-4 mr-1 cursor-pointer text-xl flex justify-center items-center border-r border-gray-400'>
                            x
                        </span>}

                    <span className='group px-1 cursor-pointer flex items-center relative'>
                        <Image onClick={() => setToggleVoice(true)} src={Mic} width={25} alt='' />
                        <span className='opacity-0 group-hover:opacity-100 transition-opacity absolute top-10 -right-10 bg-darkGray border-hGray border-2 w-28 text-[12px] font-bold py-1 flex justify-center '>
                            Search by voice
                        </span>
                    </span>
                    <span className='group px-1 cursor-pointer flex items-center relative'>
                        <Image onClick={() => setToggleImage(true)} src={Lens} width={25} alt='' />
                        <span className='opacity-0 group-hover:opacity-100 transition-opacity absolute top-10 -right-10 bg-darkGray border-hGray border-2 w-28 text-[12px] font-bold py-1 flex justify-center'>
                            Search by image
                        </span>
                    </span>
                </div>

                {(searchSug && isFocused) &&
                    <div className='my-1'>
                        {searchSug?.map((sug, index) => (
                            <div key={index} className='flex justify-between hover:bg-buttonGray px-4 py-1 rounded-md'>
                                <div className='flex'>
                                    <span className='w-4 mr-2 flex items-center'>
                                        <svg className='invert w-25' focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                                    </span>
                                    {sug.value}
                                </div>
                                <p className='text-sm hover:underline cursor-pointer text-gray-300 opacity-0'>Delete</p>
                            </div>
                        ))}
                    </div>
                }

                {(isFocused && searchSug) &&
                    <div className='w-full flex justify-center py-3'>
                        <button className='bg-buttonGray border rounded-md border-bgGray2 text-sm px-4 py-2 mx-2 hover:border-gray-500'>Google Search</button>
                        <button className='bg-buttonGray border rounded-md border-bgGray2 text-sm px-4 py-2 mx-2 hover:border-gray-500'>I&apos;m Feeling Lucky</button>
                    </div>
                }

                {toggleVoice && <VoiceListeningUI setToggle={setToggleVoice} />}
                {toggleImage && <ImageSearchUI toggle={setToggleImage} />}

            </div>

            {(!isFocused || !searchSug) &&
                <div className='w-full flex justify-center py-3 my-6'>
                    <button className='bg-bgGray2 border rounded-md border-bgGray2 text-sm px-4 py-2 mx-2 hover:border-gray-500'>Google Search</button>
                    <button className='bg-bgGray2 border rounded-md border-bgGray2 text-sm px-4 py-2 mx-2 hover:border-gray-500'>I&apos;m Feeling Lucky</button>
                </div>
            }
        </div>
    )
}
