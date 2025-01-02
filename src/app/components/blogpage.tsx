"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CommentForm from './form';
import Footer from './footer';



export default function BlogPage() {
const [searchQuery, setSearchQuery] = useState('');

return (
    <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <main className="lg:col-span-2">
            <div className="mb-6">
            <img src="/bruce-mars-FWVMhUa_wbY-unsplash 2.png" width={870} height={457} alt="Featured post" className="object-cover rounded-lg mb-4" />
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <span className="text-indigo-600">Surf Axsion</span>
                <span>Aug 09 2020</span>
            </div>
            <h1 className="text-2xl font-bold text-indigo-900 mb-4">
                Mauris at orci non vulputate diam tincidunt nec.
            </h1>
            <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.
            </p>
            <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi odio iaculis quis orci. Velit porter tincidunt consectetur mi volutpat amet. Velit sed scelerisque.
            </p>
            <br/>
            <p className='text-gray-600'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, 
            </p>
    <blockquote className="bg-gray-50 p-6 rounded-lg relative">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-pink-500 rounded-l-lg" />
        <p className="text-gray-600 italic leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet consequat.
        </p>
        <p className="text-gray-600 italic leading-relaxed mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet consequat.
        <span className="text-gray-500"> /teamk rnsux/</span>
        </p>
    </blockquote>
    <br/>
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First image with play button */}
        <div className="relative">
          <img 
            src="/77.png" 
            alt="Woman in hat by lake"
            className="w-full h-64 object-cover rounded-lg"
          />
          <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 ">
            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-pink-500 border-b-8 border-b-transparent ml-1" />
          </button>
        </div>
        
        {/* Second image */}
        <img 
          src="/66.png"
          width={417}
          height={245} 
          alt="Woman overlooking city"
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>
      
      <p className="text-gray-600 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc.
      </p>
    </div>
    <section className="text-[#0D0E43] width 99px height 14px top 301px left 92px gap 5px opacity 0px body-font">
  <div className="container px-5 py-24 mx-auto gap-20">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 width 260px height 420px grid-cols-4 hover:bg-gray-200">

        <a href="/product/1" className="block relative h-50 rounded overflow-hidden">
          <img 
            alt="ecommerce" 
            src="/11.png"
            width={178} 
            height={178}
          />
        </a>
        <div className="mt-4">

          
          <h2 className="text-gray-900 title-font text-lg font-medium">Cantilever chair</h2>
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Code - Y523201</h3>
          <p className="mt-1">$42.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 width 260px height 420px hover:bg-gray-200">
        <Link href="/product/2" className="block relative h-50 rounded overflow-hidden">
          <Image alt="ecommerce" src="/22.png" width={209} height={254}/>
        </Link>
        <div className="mt-4">
          
          <h2 className="text-gray-900 title-font text-lg font-medium">Cantilever chair</h2>
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Code - Y523201</h3>
          <p className="mt-1">$42.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 width 260px height 420px hover:bg-gray-200">
        <Link href="/product/3" className="block relative h-50 rounded overflow-hidden">
          <Image alt="ecommerce" src="/33.png" width={175} height={175}/>
        </Link>
        <div className="mt-4">
          
          <h2 className="text-gray-900 title-font text-lg font-medium">Cantilever chair</h2>
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Code - Y523201</h3>
          <p className="mt-1">$42.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 width 260px height 420px hover:bg-gray-200">
        <Link href="/product/4" className="block relative h-50 rounded overflow-hidden">
          <Image alt="ecommerce" src="/44.png" width={216} height={151}/>
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
<p className="text-gray-600 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
<br/>
<br/>
<p className="text-gray-600 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
    <br/>
    <br/>
    <div className="flex space-x-4"> {/* Use flexbox for horizontal layout */}
      <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <div className="rounded-full bg-blue-700 w-10 h-10 flex items-center justify-center"> {/* Rounded background */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </div>
      </Link>

      <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <div className="rounded-full bg-pink-500 w-10 h-10 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </div>
      </Link>

      <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <div className="rounded-full bg-sky-500 w-10 h-10 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
          </svg>
        </div>
      </Link>
    </div>
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 flex items-start"> {/* Card container */}
          <div className="w-24 h-24 mr-6 relative overflow-hidden rounded-lg"> {/* Image container */}
            <Image
              src="/Rectangle 59.png"
              alt="I1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div> {/* Text content */}
            <div className="flex items-baseline mb-1">
              <h3 className="text-lg font-medium text-gray-800"></h3>
              <p className="text-sm text-gray-500 font-bold relative left-[10px]"> Sapien ac</p>
            </div>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.</p>
          </div>
        </div>
        
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 flex items-start"> {/* Card container */}
          <div className="w-24 h-24 mr-6 relative overflow-hidden rounded-lg"> {/* Image container */}
            <Image
              src="/Rectangle 58.png"
              alt="I2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div> {/* Text content */}
            <div className="flex items-baseline mb-1">
              <h3 className="text-lg font-medium text-gray-800"></h3>
              <p className="text-sm text-gray-500 font-bold">Augue conva</p>
            </div>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.</p>
          </div>
        </div>
        <CommentForm/>


            </div>
        </main>
        
        <aside className="space-y-8">
            <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4 text-indigo-900">Search</h2>
            <input
                type="search"
                placeholder="Search posts..."
                className="w-full px-4 py-2 border rounded-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            </section>

            <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4 text-indigo-900">Categories</h2>
            <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-pink-500 text-white rounded-full text-sm">Hobbies (14)</span>
                <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">Women (21)</span>
                <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">Women (21)</span>
                <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">Women (21)</span>
            </div>
            </section>

            <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4 text-indigo-900">Recent Post</h2>
        
                <div className="flex gap-4 mb-4 last:mb-0">
                <img src="/Rectangle 126.png" width={70} height={51} alt="" className="object-cover rounded"/>
                <div>
                    <h3 className="text-indigo-900 font-medium mb-1">It is a long established fact</h3>
                    <span className="text-sm text-gray-500">Aug 09 2020</span>
                </div>
                </div><div className="flex gap-4 mb-4 last:mb-0">
                <img src="/999.png" width={70} height={51} alt="" className="object-cover rounded"/>
                <div>
                    <h3 className="text-indigo-900 font-medium mb-1">It is a long established fact</h3>
                    <span className="text-sm text-gray-500">Aug 09 2020</span>
                </div>
                </div><div className="flex gap-4 mb-4 last:mb-0">
                <img src="/888.png" width={70} height={51} alt="" className="object-cover rounded"/>
                <div>
                    <h3 className="text-indigo-900 font-medium mb-1">It is a long established fact</h3>
                    <span className="text-sm text-gray-500">Aug 09 2020</span>
                </div>
                </div>
        <div className="flex gap-4 mb-4 last:mb-0">
        <img src="/777.png" width={70} height={51} alt="" className="object-cover rounded"/>
        <div>
            <h3 className="text-indigo-900 font-medium mb-1">It is a long established fact</h3>
            <span className="text-sm text-gray-500">Aug 09 2020</span>
        </div>
        </div>
            </section>

            <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4 text-indigo-900">Sale Product</h2>
            
                <div className="flex gap-4 mb-4 last:mb-0">
                <img src="/666.png" width={70} height={51} alt="" className="w-16 h-16 object-cover rounded"/>
                <div>
                    <h3 className="text-indigo-900 font-medium mb-1">Elit eiusmod eu sim maxim.</h3>
                    <span className="text-sm text-gray-500">Aug 09 2020</span>
                </div>
                </div><div className="flex gap-4 mb-4 last:mb-0">
                <img src="/555.png" width={70} height={51} alt="" className="w-16 h-16 object-cover rounded"/>
                <div>
                    <h3 className="text-indigo-900 font-medium mb-1">Elit eiusmod eu sim maxim.</h3>
                    <span className="text-sm text-gray-500">Aug 09 2020</span>
                </div>
                </div><div className="flex gap-4 mb-4 last:mb-0">
                <img src="/444.png" width={70} height={51} alt="" className="w-16 h-16 object-cover rounded"/>
                <div>
                    <h3 className="text-indigo-900 font-medium mb-1">Elit eiusmod eu sim maxim.</h3>
                    <span className="text-sm text-gray-500">Aug 09 2020</span>
                </div>
                </div>
            </section>
            <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4 text-indigo-900">Offer product</h2>
            
                <div className="flex gap-4 mb-4 hover:bg-gray-200 last:mb-0">
                <img src="/C.png" width={70} height={51} alt="" className="w-16 h-16 object-cover rounded"/>
                <div>
                    <h3 className="text-indigo-900 font-medium mb-1">Duis lectus est.</h3>
                    <span className="text-sm text-gray-500">$12.00 - $15.00</span>
                </div>
                </div><div className="flex gap-4 mb-4 last:mb-0 hover:bg-gray-200">
                <img src="/Rectangle 134.png" width={70} height={51} alt="" className="w-16 h-16 object-cover rounded"/>
                <div>
                    <h3 className="text-indigo-900 font-medium mb-1">Sed placerat.</h3>
                    <span className="text-sm text-gray-500">$12.00 - $15.00</span>
                </div>
                </div><div className="flex gap-4 mb-4 last:mb-0 hover:bg-gray-200">
                <img src="/222.png" width={70} height={51} alt="" className="w-16 h-16 object-cover rounded"/>
                <div>
                    <h3 className="text-indigo-900 font-medium mb-1">Netus proin.</h3>
                    <span className="text-sm text-gray-500">$12.00 - $15.00</span>
                </div>
                </div><div className="flex gap-4 mb-4 last:mb-0 hover:bg-gray-200">
                <img src="/333.png" width={70} height={51} alt="" className="w-16 h-16 object-cover rounded"/>
                <div>
                    <h3 className="text-indigo-900 font-medium mb-1">Platea in.</h3>
                    <span className="text-sm text-gray-500">$12.00 - $15.00</span>
                </div>
                </div>
                </section>
        </aside>
        </div>


        
        <footer className="bg-[#EEEFFB] w-screen h-screen text-gray-600 body-font relative top-[150px]">
        
        <div className="font-['Josefin_Sans'] relative font-bold text-[34px] top-[95px] left-[290px] text-[#0D0E43]">
                    Hekto
                    </div>  
                    <form className="flex max-w-md relative rounded-md border top-[164px] left-[180px] border-purple-300 bg-white overflow-hidden">
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
        <p className="top-[233px] left-[180px] relative text-[#8A8FB9]">
        Contact Info
        </p>
        <p className="top-[233px] left-[180px] relative text-[#8A8FB9]">
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
        
<div className="bg-[#E7E4F8] top-[150px] w-screen relative">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">©Webecy - All Rights Reserved</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-500">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
        </a>
        <a className="ml-3 text-gray-500">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
        </a>
        <a className="ml-3 text-gray-500">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
        </a>
        <a className="ml-3 text-gray-500">
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
        </a>
    </span>
    </div>
</div>

        

    </div>
    );
}