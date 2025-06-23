import React from "react";

export default function EshopMainSlides({ src, background }) {
    return (
        <>
            <div className={`w-[1260px] h-[600px] ${background}`}>
                <img src= {src} alt=""  className="w-[500px] h-[400px] m-auto"/>
            </div>
        </>
    );
}
