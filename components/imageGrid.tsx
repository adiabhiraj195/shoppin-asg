import React from "react";
import sampleImg from "@/assets/mock/_.jpeg"
import sampleIcon from "@/assets/mock/strawberry.webp"
import Image from "next/image";
import { useStore } from "@/store";

const ImageGrid = () => {
    const image = useStore((state) => state.image);

    const images = Array(50)
        .fill(0)
        .map((_, i) => ({
            src: image,
            title: `Image ${i + 1}`,
            description: "It looks, Nice na!",
            alt: `Placeholder ${i + 1}`,
        }));

    return (
        <div className="p-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative cursor-pointer"
                    >
                        <div className="min-h-28 flex items-center bg-gray-200 rounded-2xl overflow-hidden">
                            <Image
                                src={image.src as string}
                                alt={image.alt || "Image"}
                                className="w-full object-center"
                                width={200}
                                height={100}
                            />
                        </div>
                        <div className="text-left text-gray-700 px-1">
                            <p className="flex items-center text-sm">
                                <span className="mr-1"><Image src={sampleIcon} alt="" width={18} height={10} /></span>
                                {image.title || "Image Title"}
                            </p>
                            <p className="text-sm text-gray-900">{image.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};



export default ImageGrid