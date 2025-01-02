"use client"

import React from 'react';

    
const PromotionComponent = () => {
return (
    <div className="bg-[#F2F0FF] w-full h-screen relative">
        <div className="absolute top-122 left-70">
        <img
            src="/image 32.png"
            alt="Lamp"
            width={387}
            height={387}
        />
        </div>
        
        <div className='width 706px height 689px top 161px left 1041px gap 0px border 1px'>
        <div className="absolute top-[161px] left-[1096px] bg-[rgba(236, 210, 250, 0.35)] rounded-full">
            <img src='/Ellipse 60.png' width={651} height={651} />
        </div>
        <div className='absolute top-[202px] left-[1041px] bg-[rgba(236, 210, 250, 0.35)]'>
            <img src='/Ellipse 61.png' width={648} height={648}/> 
        </div>
        <div className='absolute top-[221px] left-[1051px]'>
            <img src="/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room 1.png" width={629} height={629}/>
        </div>
        <div className="absolute top-1739px right-0 bg-blue-400 text-white rounded-full p-4 w-20 h-20 flex items-center justify-center">
            <span className="font-bold">50% off</span>
        </div>
        </div>
        <div className="absolute top-[230px] left-[280px]">
        <h4 className="text-[#FB2E86] font-lato text-base font-bold leading-7 mb-4">
            Best Furniture For Your Castle...
        </h4>
        
        <h1 className="text-[53px] text-black font-sans font-bold leading-[82px] max-w-[644px]">
            New Furniture Collection
            <br />
            Trends in 2020
        </h1>
        
        <p className=" mt-4 mb-8 max-w-[544px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
            in phasellus non in justo.
        </p>

        <button className="bg-[#FB2E86] text-white px-8 py-3 rounded hover:bg-opacity-90">
            Shop Now
        </button>
        </div>
    

    </div>
    );
};

export default PromotionComponent;
// image 32