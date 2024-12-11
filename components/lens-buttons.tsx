import React from 'react'

export default function LensButton({ active, setActive }: { active: "search" | "text" | "translate"; setActive: React.Dispatch<React.SetStateAction<"search" | "text" | "translate">> }) {
    return (
        <div className='bg-hGray rounded-3xl'>
            <button onClick={() => setActive("search")} className={`px-3 py-1 items-center ${active == "search" ? "bg-white text-hGray" : "text-white"} rounded-3xl`}>Search</button>
            <button onClick={() => setActive("text")} className={`px-3 py-1 items-center ${active == "text" ? "bg-white text-hGray" : "text-white"} rounded-3xl`}>Text</button>
            <button onClick={() => setActive("translate")} className={`px-3 py-1 items-center ${active == "translate" ? "bg-white text-hGray" : "text-white"} rounded-3xl`}>Translate</button>
        </div>
    )
}
