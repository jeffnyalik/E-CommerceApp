import Announcement from "../Announcement/Announcement";
import React from "react";
import Navbar from "../Navs/Navbar";
import Slider from "../Slider/Slider";
import Categories from "../Category/Category";
import Products from "../Product/Products";
import NewsLetter from "../Letter/NewsLetter";



const Home = () =>{
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <NewsLetter/>
        
        </div>
        
    )
}

export default Home;