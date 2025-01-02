"use client"


import BlogPage from "../components/blogpage";
import HeaderBar from "../components/headingbar";
import Navbar from "../components/navbar";


export default function Blog() {
    return (
        <div>
            <HeaderBar/>
            <Navbar/>
            <div className="bg-[#F6F5FF] w-full h-screen relative">
                <h1 className="relative align-center font-sans font-bold text-lg text-[#101750] text-[60px] top-[221px] left-[374px]">
                Single Blog
                </h1>
                <a href="/" className="top-[266px] left-[375px] relative hover:text-pink-500">
                    Home.
                </a>
                <a href="/pages" className="top-[266px] left-[375px] relative hover:text-pink-500">Pages.</a>
                <a href="/shop" className="top-[266px] left-[375px] relative text-pink-500">Blog</a>
            </div>
            <BlogPage/>

        </div>
    )
}