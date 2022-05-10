import Announcement from "../Announcement/Announcement";
import React from "react";
import Navbar from "../Navs/Navbar";
import Slider from "../Slider/Slider";
import Categories from "../Category/Category";

const Home = () =>{
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
        </div>
        
    )
}

export default Home;