import React from "react";

const VoiceListeningUI = ({ setToggle }: { setToggle: React.Dispatch<React.SetStateAction<boolean>> }) => {

    return (
        <div className="flex items-center justify-center bg-bgGray absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen">
            <div className="text-center flex items-center justify-around w-full">
                <p className="text-gray-400 text-4xl mb-6">Listening...</p>
                {/* <div className="relative"> */}
                <div onClick={() => setToggle(false)} className="cursor-pointer rounded-full bg-red-500 h-24 w-24 flex items-center justify-center shadow-lg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="red"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="white"
                        className="h-12 w-12"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 14.5a3 3 0 003-3V6a3 3 0 10-6 0v5.5a3 3 0 003 3zm6.5-3a6.5 6.5 0 01-13 0M12 19v2m0 0h-4m4 0h4"
                        />
                    </svg>
                </div>
                {/* </div> */}
            </div>
        </div>
    );
};

export default VoiceListeningUI;