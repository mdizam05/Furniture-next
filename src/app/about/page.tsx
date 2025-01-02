import HeaderBar from "../components/headingbar";
import Navbar from "../components/navbar";
import Link from "next/link";
import Image from "next/image";


export default function About(){
    return(
        <div>
            <HeaderBar/>
            <Navbar/>
            <div className="bg-[#F6F5FF] w-screen h-screen relative">
            <h1 className="relative align-center font-sans font-bold text-lg text-[#101750] text-[60px] top-[221px] left-[374px]">
                About us
                </h1>
                <a href="/" className="top-[266px] left-[375px] relative hover:text-pink-500">
                    Home.
                </a>
                <a href="/pages" className="top-[266px] left-[375px] relative hover:text-pink-500">Pages.</a>
                <a href="/about" className="top-[266px] left-[375px] relative text-pink-500">About us</a>
            </div>
            <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="/Rectangle 56.png" width={555} height={390}/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Know About Our Ecomerce
      
        <br className="hidden lg:inline-block"/>Business, History
      </h1>
      <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
      <div className="flex justify-center cursor-pointer transition duration-200">
      <Link href="/contact"> 
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
          Contact Us
        </button>
      </Link>
      </div>
    </div>
  </div>
</section>
<h1 className="flex justify-center items-center text-4xl font-bold text-[#0D0E43]">Our Features</h1>
<section className="text-[#0D0E43] width 320x height 270px top 2631px left 375px gap 5px opacity 0px body-font">
  <div className="container px-5 py-24 mx-auto gap-20">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 width 260px height 420px grid-cols-4 hover:bg-gray-200">

        <a href="/product/1" className="block relative h-50 rounded overflow-hidden">
          <img 
            alt="ecommerce" 
            src="/free-delivery 1.png"
            width={65} 
            height={65}
          />
        </a>
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


<div className="bg-[#F6F5FF] w-screen h-screen relative">
    <h1 className="relative font-sans flex- justify-center font-bold text-lg text-[#101750] text-[60px] top-[21px] left-[600px]">Our Client Say!</h1>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/OhKElOkQ3RE.png"/>
          <p className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
          <p className="text-gray-500">Senior Product Designer</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/GH-mSApoKO0.png"/>
          <p className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Selina Gomez</h2>
          <p className="text-gray-500">Ceo At Webecy Digital</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/RukI4qZGlQs.png"/>
          <p className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
          <p className="text-gray-500">CTO</p>
        </div>
      </div>
    </div>
  </div>
</section>


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

    )
}