"use client"

import HeadingBar from "./components/headingbar";
import Navbar from "./components/navbar";
import Image from "next/image";
import PromotionComponent from "./components/promotion";
import Link from "next/link";
import LatestProducts from "./components/latest";
import TrendingProducts from "./components/trending";
import React from "react";
import { Check } from "lucide-react";
import Footer from "./components/footer";




export default function Home() {
  return (
    <div className="bg-gray-100 justify-center sm:h-screen md:h-screen h-screen relative items-center">
      <HeadingBar/>
      <Navbar/>
<PromotionComponent/>
  <h1 className="flex justify-center items-center text-4xl font-bold text-[#0D0E43] Top 1015px Left 777px">Featured Products</h1>
  <section className="text-[#0D0E43] width 99px height 14px top-[301px] left-[92px] gap 5px opacity 0px body-font">
  <div className="container px-5 py-24 mx-auto gap-20">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 width 260px height 420px grid-cols-4 hover:bg-gray-200">

        <Link href="/product/1" className="block relative h-50 rounded overflow-hidden">
          <Image
            alt="ecommerce" 
            src="/image 1168.png"
            width={178} 
            height={178}
          />
        </Link>
        <div className="mt-4">

          
          <h2 className="text-gray-900 title-font text-lg font-medium">Cantilever chair</h2>
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Code - Y523201</h3>
          <p className="mt-1">$42.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 width 260px height 420px hover:bg-gray-200">
        <Link href="/product/2" className="block relative h-50 rounded overflow-hidden">
          <Image alt="ecommerce" src="/image 1.png" width={130} height={150}/>
        </Link>
        <div className="mt-4">
          
          <h2 className="text-gray-900 title-font text-lg font-medium">Cantilever chair</h2>
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Code - Y523201</h3>
          <p className="mt-1">$42.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 width 260px height 420px hover:bg-gray-200">
        <Link href="/product/3" className="block relative h-50 rounded overflow-hidden">
          <Image alt="ecommerce" src="/image 1169.png" width={175} height={175}/>
        </Link>
        <div className="mt-4">
          
          <h2 className="text-gray-900 title-font text-lg font-medium">Cantilever chair</h2>
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Code - Y523201</h3>
          <p className="mt-1">$42.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 width 260px height 420px hover:bg-gray-200">
        <Link href="/product/4" className="block relative h-50 rounded overflow-hidden">
          <Image alt="ecommerce" src="/image 3.png" width={216} height={151}/>
        </Link>
        <div className="mt-4">
          
          <h2 className="text-gray-900 title-font text-lg font-medium">Cantilever chair</h2>
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Code - Y523201</h3>
          <p className="mt-1 ">$42.00</p>
        </div>
      </div>
      </div>
    
  </div>
</section>
      
<h1 className="flex justify-center items-center text-4xl font-bold text-[#0D0E43]">Latest Products</h1>
<LatestProducts/>
<h1 className="flex justify-center items-center text-4xl font-bold text-[#0D0E43]">What Shopex Offer!</h1>
<section className="text-[#0D0E43] width 320x height 270px top 2631px left 375px gap 5px opacity 0px body-font">
  <div className="container px-5 py-24 mx-auto gap-20">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 width 260px height 420px grid-cols-4 hover:bg-gray-200">

        <Link href="/product/1" className="block relative h-50 rounded overflow-hidden">
          <Image 
            alt="ecommerce" 
            src="/free-delivery 1.png"
            width={65} 
            height={65}
          />
        </Link>
        <div className="mt-4">

          
          <h2 className="text-rgba(21, 24, 117, 1) title-font text-lg font-medium">24/7 Support</h2>
          <p className="text-gray-500 text-xs tracking-widest title-font mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ullam quibusdam, a expedita ration.</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 width 260px height 420px hover:bg-gray-200">
        <Link href="/product/2" className="block relative h-50 rounded overflow-hidden">
          <Image alt="ecommerce" src="/cashback 1.png" width={65} height={65}/>
        </Link>
        <div className="mt-4">
          
          <h2 className="text-rgba(21, 24, 117, 1) title-font text-lg font-medium">24/7 Support</h2>
          <p className="text-gray-500 text-xs tracking-widest title-font mb-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 width 260px height 420px hover:bg-gray-200">
        <Link href="/product/3" className="block relative h-50 rounded overflow-hidden">
          <Image alt="ecommerce" src="/premium-quality 1.png" width={65} height={65}/>
        </Link>
        <div className="mt-4">
          
          <h2 className="text-rgba(21, 24, 117, 1) title-font text-lg font-medium">24/7 Support</h2>
          <p className="text-gray-500 text-xs tracking-widest title-font mb-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 width 260px height 420px hover:bg-gray-200">
        <Link href="/product/4" className="block relative h-50 rounded overflow-hidden">
          <Image alt="ecommerce" src="/24-hours-support 1.png" width={65} height={65}/>
        </Link>
        <div className="mt-4">
          
          <h2 className="text-rgba(21, 24, 117, 1) title-font text-lg font-medium">24/7 Support</h2>
          <p className="text-gray-500 text-xs tracking-widest title-font mb-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex quo obcaecati porro deserunt nulla, facere officia quos! </p>
        </div>
      </div>
      </div>
    
  </div>
</section>



<div className="bg-[#F2F0FF] w-full h-screen relative">

        <div className='width 706px height 689px top 161px left 1041px gap 0px border 1px'>
        <div className="absolute top-[21.38px] left-[9px] bg-[rgba(245, 225, 252, 1)] rounded-full">
            <img src='/Ellipse 63.png' width={481} height={449.62}/>
        </div>
        <div className="absolute top-122px left-40px">
        <img
            src="/Home-Stylish-Club-Sofa-Chair-Pleated-Sofa-Armchair-with-Golden-Legs 1.png"
            alt="sofa"
            width={509}
            height={550}
        />
        </div>
        <div className=" absolute top-[82px] left-[543px]">
        <h1 className="text-[53px] text-[#151875] font-sans font-bold leading-[82px] max-w-[644px]">Unique Features Of latest &
          Trending Poducts
          </h1>
          <h5 className="text-[#ACABC3]">All frames constructed with hardwood solids and laminates</h5>
          <h5 className="text-[#ACABC3]">Reinforced with double wood dowels, glue, screw - nails corner 
          blocks and machine nails</h5>
          <h5 className="text-[#ACABC3]">Arms, backs and seats are structurally reinforced</h5>
          <button className="bg-[#FB2E86] text-white px-8 py-3  flex rounded hover:bg-pink-700">
            Add to Cart
        </button>
        <div className="flex gap-5">
        <h4 className="text-[#151875] font-bold">B&B Italian Sofa </h4>
        
        <h4 className="text-[#151875] ">$32.00</h4>
        </div>
        </div>

        
</div>
</div>

<h1 className="flex justify-center items-center text-4xl font-bold text-[#0D0E43]">Trending Products</h1>
    <TrendingProducts/>
    <section className="text-[#0D0E43] width 320x height 270px top 2631px left 375px gap 5px opacity 0px body-font">
        <div className="container px-5 py-24 mx-auto gap-20">
        <div className="flex flex-wrap -m-4">
        <div className="lg:w-1/4 md:w-1/2 p-4 width 420px height 270px grid grid-cols-2 hover:bg-gray-300">
        <div className="mt-5">
          <h2 className="text-rgba(21, 24, 117, 1) title-font text-lg font-medium">23% off in all products</h2>
          <button className="bg-[#FB2E86] text-white px-8 py-3  flex rounded hover:bg-pink-700">
            Shop Now
        </button>
        </div>
        
        <Link href="/product/clock" className="block relative h-50 place-items-end rounded overflow-hidden">
          <Image 
            alt="ecommerce" 
            src="/image 1162.png"
            width={213} 
            height={207}
          />
        </Link>
      </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 width 420px height 270px grid grid-cols-2 hover:bg-gray-300">
        <div className="mt-5">
          <h2 className="text-rgba(21, 24, 117, 1) title-font text-lg font-medium">23% off in all products</h2>
          <button className="bg-[#FB2E86] text-white px-8 py-3 rounded hover:bg-pink-700">
            View Collection
        </button>
        </div>
        
        <Link href="/product/clock" className="block relative h-50 place-items-end rounded overflow-hidden">
          <Image 
            alt="ecommerce" 
            src="/image 1161.png"
            width={312} 
            height={173}
          />
        </Link>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 width 420px height 270px grid grid-cols-2 hover:bg-gray-300">
        <div className="mt-5">
          <h2 className="text-rgba(21, 24, 117, 1) title-font text-lg font-medium">Executive Seat chair</h2>
          <button className="bg-[#FB2E86] text-white px-8 py-3 rounded hover:bg-pink-700">
            Add to Cart
        </button>
        </div>
        
        <Link href="/product/clock" className="block relative h-50 place-items-end rounded overflow-hidden">
          <Image 
            alt="ecommerce" 
            src="/image 19.png"
            width={67} 
            height={67}
          />
        </Link>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 width 420px height 270px grid grid-cols-2 hover:bg-gray-300">
        <div className="mt-5">
          <h2 className="text-rgba(21, 24, 117, 1) title-font text-lg font-medium">Executive Seat chair</h2>
          <button className="bg-[#FB2E86] text-white px-8 py-3 rounded hover:bg-pink-700">
          Add to Cart
        </button>
        </div>
        
        <Link href="/product/clock" className="block relative h-50 place-items-end rounded overflow-hidden">
          <Image 
            alt="ecommerce" 
            src="/image 30.png"
            width={64} 
            height={71}
          />
        </Link>
        </div>
  
      </div>    
          </div>
      
        
      </section>

    <h1 className="flex justify-center items-center text-4xl font-bold text-[#151875]">Discount Item</h1>
    <div className="bg-[#F2F0FF] w-full h-screen relative">
        <div className='width 706px height 689px top 161px left 1041px gap 0px border 1px'>
        <div className="absolute top-[161px] left-[1156px] rounded-full">
            <img src='/Ellipse 64.png' width={272} height={272} />
        </div>
        
        <div className='absolute top-[120px] left-[1090px]'>
            <img src="/tortuga-01-b 1.png" width={999} height={897}/>
        </div>
        </div>
        <div className="absolute top-[230px] left-[280px]">
        <h2 className="text-[#151875] text-[45px] font-sans font-bold leading-[82px] max-w-[644px]">
        20% Discount Of All Products
        </h2>
        <h3 className="text-pink-500 text-[21px] font-bold font-sans">
        Eams Sofa Compact
        </h3>
        
        <p className="text-[#B7BACB] font-Lato text-[17px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
        </p>
        <div className="flex items-center gap-2">
        <Check size={16} className="text-purple-500 stroke-2" />
        <span className="text-gray-400 text-[16px]">Material expose like metals</span>
          </div>
          <div className="flex items-center gap-2">
        <Check size={16} className="text-purple-500 stroke-2" />
        <span className="text-gray-400 text-[16px]">Simple neutral colours.</span>
          </div>        <div className="flex items-center gap-2">
        <Check size={16} className="text-purple-500 stroke-2" />
        <span className="text-gray-400 text-[16px]">Clear lines and geomatric figures</span>
          </div>        <div className="flex items-center gap-2">
        <Check size={16} className="text-purple-500 stroke-2" />
        <span className="text-gray-400 text-[16px]">Material expose like metals</span>
          </div>
        <button className="bg-[#FB2E86] text-white px-8 py-3 rounded hover:bg-opacity-90">
            Shop Now
        </button>
        </div>
    </div>
    
    <h1 className="flex justify-center items-center text-4xl font-bold text-[#151875]">Top Categories</h1>
    <section className="text-[#0D0E43] width 99px height 14px top 301px left 92px gap 5px opacity 0px body-font">
  <div className="container px-5 py-24 mx-auto gap-20">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 width 260px height 420px grid-cols-4 hover:bg-gray-200">

        <Link href="/product/1" className="block relative h-50 rounded overflow-hidden">
          <Image 
            alt="ecommerce" 
            src="/image 20.png"
            width={178} 
            height={178}
          />
        </Link>
        <div className="mt-4">

          
          <h2 className="text-gray-900 title-font text-lg font-medium">Cantilever chair</h2>
          <p className="mt-1">$56.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 width 260px height 420px hover:bg-gray-200">
        <Link href="/product/2" className="block relative h-50 rounded overflow-hidden">
          <Image alt="ecommerce" src="/image 1168.png" width={158} height={157}/>
        </Link>
        <div className="mt-4">
          
          <h2 className="text-gray-900 title-font text-lg font-medium">Cantilever chair</h2>
          <p className="mt-1">$56.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 width 260px height 420px hover:bg-gray-200">
        <Link href="/product/3" className="block relative h-50 rounded overflow-hidden">
          <Image alt="ecommerce" src="/image 1171.png" width={149} height={149}/>
        </Link>
        <div className="mt-4">
          
          <h2 className="text-gray-900 title-font text-lg font-medium">Cantilever chair</h2>
          <p className="mt-1">$56.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 width 260px height 420px hover:bg-gray-200">
        <Link href="/product/4" className="block relative h-50 rounded overflow-hidden">
          <Image alt="ecommerce" src="/image 1169.png" width={175} height={175}/>
        </Link>
        <div className="mt-4">
          
          <h2 className="text-gray-900 title-font text-lg font-medium">Cantilever chair</h2>
          <p className="mt-1 ">$56.00</p>
        </div>
      </div>
      </div>
    
  </div>
</section>

<div className="absolute w-full">
  <img src="/Rectangle 102.png" alt="Banner" width={1921} height={460}/>
  <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-[#151875] text-4xl font-bold mb-6 text-center max-w-3xl">
          Get Latest Update By Subscribe Our Newslater
        </h1>
        <button className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-800 transition-colors">
          Shop Now
        </button>
      </div>
    </div> 
    <div className="absolute justify-center items-center top-[5700px] left-[300px]">
        <img src="/image 1174.png" width={904} height={93}/>
        </div>
  
  
        <h1 className="absolute justify-center items-center text-4xl font-bold top-[5800px] left-[650px] text-[#151875]">Latest Blogs</h1>
  
  <div className="top-[5800px] absolute justify-center left-[125px]">
  
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 hover:border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="/JIUjvqe2ZHg.png" width={370} height={255} alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Top esssential Trends in 2025</h1>
            <p className="leading-relaxed mb-3 text-[#72718F]">More off this less hello samlande lied much
            over tightly circa horse taped mightly</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 hover:border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="/2dcYhvbHV-M.png" width={370} height={255} alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Top esssential Trends in 2025</h1>
            <p className="leading-relaxed mb-3 text-[#72718F]">More off this less hello samlande lied much
            over tightly circa horse taped mightly</p>
            <div className="flex items-center flex-wrap">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 hover:border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="/abcd.png" width={370} height={255} alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Top esssential Trends in 2025</h1>
            <p className="leading-relaxed mb-3 text-[#72718F]">More off this less hello samlande lied much
            over tightly circa horse taped mightly</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  </div>


  

  <footer className="bg-[#EEEFFB] w-full h-screen text-gray-600 body-font relative top-[1000px]">

  <div className="font-['Josefin_Sans'] relative font-bold text-[34px] top-[95px] left-[290px] text-[#0D0E43]">
            Hekto
            </div>  
            <form className="flex max-w-md relative rounded-md border top-[164px] left-[250px] border-purple-300 bg-white overflow-hidden">
      <input
        type="email"
        placeholder="Enter Email Address"
        className="flex-1 px-4 py-2 outline-none text-gray-600 placeholder-gray-400"
      />
      <button 
        type="submit"
        className="bg-pink-500 text-white px-6 py-2 hover:bg-pink-600 transition-colors"
      >
        Sign Up
      </button>
    </form>
<p className="top-[233px] left-[308px] relative text-[#8A8FB9]">
Contact Info
</p>
<p className="top-[233px] left-[308px] relative text-[#8A8FB9]">
17 Princess Road, London, Greater London NW1 8JR, UK
</p>

  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="flex-grow flex flex-wrap md:pl-20 relative left-[540px] -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-screen px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-900">Laptops & Computers</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-900">Cameras & Photography</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-900">Smart Phones & Tablets</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-900">Waterproof Headphones</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-screen px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Customer Care</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-900">My Account</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-900">Discounts</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-900">Returns</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-900">Orders History</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-screen px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Pages</h2>
        <nav className="list-none mb-10">
          <li>
            <a href="/blog" className="text-gray-600 hover:text-gray-900">Blog</a>
          </li>
          <li>
            <a href="/shop" className="text-gray-600 hover:text-gray-900">Browse the Shop</a>
          </li>
          <li>
            <a href="/product" className="text-gray-600 hover:text-gray-900"> Products</a>
          </li>
          <li>
            <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  
</footer>
<Footer/>

</div>
  )
}

