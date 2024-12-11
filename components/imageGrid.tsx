import React from "react";
import sampleImg from "@/assets/mock/_.jpeg"
import sampleIcon from "@/assets/mock/strawberry.webp"
import Image from "next/image";

const ImageGrid = () => {
    return (
        <div className="p-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative"
                    >
                        <div className="min-h-28 flex items-center bg-gray-200 rounded-2xl overflow-hidden">
                            <Image
                                src={image.src}
                                alt={image.alt || "Image"}
                                className="w-full object-center"
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

// Example usage
const images = Array(50)
    .fill(0)
    .map((_, i) => ({
        src: sampleImg, // Replace with your dynamic image source
        title: `Image ${i + 1}`,
        description: "It looks, Nice na!",
        alt: `Placeholder ${i + 1}`,
    }));

export default ImageGrid