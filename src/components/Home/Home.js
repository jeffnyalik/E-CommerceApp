import Announcement from "../Announcement/Announcement";
import React from "react";
import Navbar from "../Navs/Navbar";
import Slider from "../Slider/Slider";
import Categories from "../Category/Category";
import Products from "../Product/Products";
import NewsLetter from "../Letter/NewsLetter";
import Footer from "../Footer/Footer";



const Home = () =>{
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <NewsLetter/>
            <Footer/>
        </div>
        
    )
}

export default Home;