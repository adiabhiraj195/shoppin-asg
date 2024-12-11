import React from "react";

const Footer = () => {
    return (
        <footer className="bg-darkGray">
            <div className="border-b border-hGray px-6 py-3">
                <span>India</span>
            </div>
            <div className="px-6 py-3 flex justify-between items-center">
                <div className="flex gap-6">
                    <a href="#" className="hover:underline">
                        Advertising
                    </a>
                    <a href="#" className="hover:underline">
                        Business
                    </a>
                    <a href="#" className="hover:underline">
                        How Search works
                    </a>
                </div>

                <div className="flex gap-6">
                    <a href="#" className="hover:underline">
                        Privacy
                    </a>
                    <a href="#" className="hover:underline">
                        Terms
                    </a>
                    <a href="#" className="hover:underline">
                        Settings
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;