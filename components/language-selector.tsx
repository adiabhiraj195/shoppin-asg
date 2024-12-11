import React from "react";

const LanguageSelector = () => {
    const languages = [
        "हिन्दी",
        "বাংলা",
        "తెలుగు",
        "मराठी",
        "தமிழ்",
        "ગુજરાતી",
        "ಕನ್ನಡ",
        "മലയാളം",
        "ਪੰਜਾਬੀ",
    ];

    return (
        <div className=" text-gray-400 text-sm text-center py-3">
            < p className="mb-1" >
                Google offered in: {" "}
                {
                    languages.map((language, index) => (
                        <a
                            key={index}
                            href="#"
                            className="text-blue-400 hover:underline mx-1"
                        >
                            {language}
                        </a>
                    ))
                }
            </p >
        </div >
    );
};

export default LanguageSelector;