import React, { useEffect, useRef, useState } from "react";
import "cropperjs/dist/cropper.css"; // Cropper.js CSS
import Cropper from "cropperjs";

const GoogleLensCropper = ({ file }: { file: File }) => {
    const imageRef = useRef<HTMLImageElement>(null);
    const [cropper, setCropper] = useState<Cropper | null>(null);

    useEffect(() => {
        if (file) {
            console.log(file, " render")
            const reader = new FileReader();
            reader.onload = () => {
                if (imageRef.current) {
                    imageRef.current.src = reader.result as string;
                    if (cropper) cropper.destroy();
                    const newCropper = new Cropper(imageRef.current, {
                        aspectRatio: 16 / 9, // Adjust to your desired aspect ratio
                        viewMode: 1,
                        guides: false,
                        center: false,
                        autoCropArea: 0.8, // Control crop area size
                        background: false, // Disable background image behind crop area
                        zoomable: false,
                    });
                    setCropper(newCropper);
                }
            };
            reader.readAsDataURL(file);
        }
    }, [file])

    // const handleCrop = () => {
    //     if (cropper) {
    //         const croppedCanvas = cropper.getCroppedCanvas();
    //         const croppedDataUrl = croppedCanvas.toDataURL("image/png");
    //         setCroppedImage(croppedDataUrl);
    //     }
    // };

    return (
        <div className="relative max-w-4xl w-full">
            <img ref={imageRef} alt="To be cropped" className="w-full" />

        </div>
    );
};

export default GoogleLensCropper;