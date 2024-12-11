import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/store";

const ImageSearchUI = ({ toggle }: { toggle: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const router = useRouter();
    const setValue = useStore((state) => state.setValue);
    const setImage = useStore((state) => state.setImage);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            console.log("Selected file:", file);
            setValue(file)

            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);

            router.push(`/lens`)
        }

    };


    return (
        <div className="flex flex-col items-center justify-center bg-bgGray2 p-4 rounded-3xl absolute w-full top-0">
            <div className="flex justify-center items-center mb-6 relative w-full">
                <h2 className="font-semibold">Search any image with Google Lens</h2>
                <button onClick={() => toggle(false)} className="text-white font-bold hover:text-gray-200 absolute right-0 -top-1">✕</button>
            </div>

            <div className="bg-bgGray text-gray-200 rounded-2xl w-full p-6 border-dashed border border-gray-500">
                {selectedFile ?
                    <div className="w-full h-56 flex justify-center items-center font-bold">
                        Uploading...
                    </div> :
                    <>
                        <div className="flex items-center justify-center rounded-lg h-28">
                            <svg width="59" height="45" viewBox="0 0 59 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40.3332 13.747L1.58323 13.747L1.58323 43.4553L40.3332 43.4553L40.3332 13.747Z" className="ArIAXb"></path><path d="M40.3332 13.747L17.0832 13.747L17.0832 33.122L40.3332 33.122L40.3332 13.747Z" className="qOFLsb"></path><path fillRule="evenodd" clipRule="evenodd" d="M0.614479 12.7783L6.74988 12.7783L6.74988 14.7158L2.55198 14.7158L2.55198 18.9137L0.614479 18.9137L0.614479 12.7783Z" fill="#BDC1C6"></path><path fillRule="evenodd" clipRule="evenodd" d="M39.3644 42.4866L39.3644 38.2887L41.3019 38.2887L41.3019 44.4241L35.1665 44.4241L35.1665 42.4866L39.3644 42.4866Z" fill="#BDC1C6"></path><path fillRule="evenodd" clipRule="evenodd" d="M0.614479 38.2887L2.55198 38.2887L2.55198 42.4866L6.74987 42.4866L6.74987 44.4241L0.614479 44.4241L0.614479 38.2887Z" fill="#BDC1C6"></path><path d="M19.6665 30.2531H58.4165L58.4165 0.544722H19.6665L19.6665 30.2531Z" fill="#AECBFA"></path><path d="M19.6665 21.8429L19.6665 30.2525L58.4168 30.2525L58.4168 19.7406L49.6667 12.4069C48.6234 11.5342 47.2931 11.0699 45.9272 11.1018C44.5614 11.1337 43.2547 11.6596 42.2542 12.5801L33.4166 20.7918L28.4166 17.2548C27.7332 16.7781 26.9013 16.5563 26.0684 16.6288C25.2354 16.7012 24.4554 17.0632 23.8666 17.6505L19.6665 21.8429Z" fill="#669DF6"></path><path d="M30.0056 12.9386C31.7315 12.9386 33.1306 11.5395 33.1306 9.8136C33.1306 8.08773 31.7315 6.68863 30.0056 6.68863C28.2798 6.68863 26.8807 8.08773 26.8807 9.8136C26.8807 11.5395 28.2798 12.9386 30.0056 12.9386Z" fill="#E8F0FE"></path></svg>
                            <p className=" mx-1">Drag an image here or </p>
                            <label className="text-blue-400 flex justify-end items-center cursor-pointer hover:underline">
                                upload a file
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                            </label>
                        </div>

                        {/* OR Separator */}
                        <div className="flex items-center my-4">
                            <div className="flex-grow border-t border-gray-500"></div>
                            <span className="px-4 text-gray-400">OR</span>
                            <div className="flex-grow border-t border-gray-500"></div>
                        </div>

                        <div className="flex justify-center items-center">
                            <input
                                type="text"
                                placeholder="Paste image link"
                                className="w-full px-6 py-2 text-gray-200 bg-bgGray2 border border-gray-500 rounded-3xl placeholder-gray-400 focus:outline-none focus:border-blue-600"
                            />

                            <button className="text-blue-300 bg-bgGray2 hover:text-white py-2 px-6 rounded-3xl border border-gray-500 ml-2 hover:bg-bgGray">
                                Search
                            </button>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default ImageSearchUI;