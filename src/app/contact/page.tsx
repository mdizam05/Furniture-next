import ContactForm from "../components/contactform";
import HeaderBar from "../components/headingbar";
import Navbar from "../components/navbar";
import Link from "next/link";




export default function Contact() {
    return (
        <div>
            <HeaderBar/>
            <Navbar/>

            <div className="bg-[#F6F5FF] w-full h-screen relative">
                <h1 className="relative align-center font-sans font-bold text-lg text-[#101750] text-[60px] top-[221px] left-[374px]">
                Contact us
                </h1>
                <a href="/" className="top-[266px] left-[375px] relative hover:text-pink-500">
                    Home.
                </a>
                <a href="/pages" className="top-[266px] left-[375px] relative hover:text-pink-500">Pages.</a>
                <a href="/contact" className="top-[266px] left-[375px] relative text-pink-500">Contact</a>
            </div>



            <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Grid layout */}
        {/* About Us Section */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Information About us</h2>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
          </p>
          <div className="flex space-x-4 mt-4"> {/* Colored circles */}
            <div className="w-4 h-4 rounded-full bg-purple-600"></div>
            <div className="w-4 h-4 rounded-full bg-pink-500"></div>
            <div className="w-4 h-4 rounded-full bg-cyan-500"></div>
          </div>
        </div>

        {/* Contact Way Section */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Contact Way</h2>
          <div className="grid grid-cols-2 gap-4"> {/* Inner grid for contact details */}
            <div>
              <div className="flex items-center mb-2"> {/* Phone */}
                <div className="w-6 h-6 rounded-full bg-blue-700 mr-2"></div> {/* Circle */}
                <div>
                  <p className="text-gray-700">Tel: 877-67-88-99</p>
                  <p className="text-gray-700">E-Mail: shop@store.com</p>
                </div>
              </div>
              <div className="flex items-center"> {/* Address */}
                <div className="w-6 h-6 rounded-full bg-orange-400 mr-2"></div> {/* Circle */}
                <p className="text-gray-700">
                  20 Margaret st, London<br />
                  Great britain, 3NM98-LK
                </p>
              </div>
            </div>
            <div> {/* Right side of Contact Way (Support and Shipping) */}
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 rounded-full bg-pink-500 mr-2"></div>
                <p className="text-gray-700">Support Forum<br />For over 24hr</p>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-green-500 mr-2"></div>
                <p className="text-gray-700">Free standard shipping<br />on all orders.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


            <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-4">You can contact us via email at example@email.com or call us at 123-456-7890.</p>
        <Link href="/">
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go Back to Home</button>
        </Link>
      </div>
    </div>

    
<ContactForm/>

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
    )
}