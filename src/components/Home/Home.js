import Announcement from "../Announcement/Announcement";
import React from "react";
import Navbar from "../Navs/Navbar";
import Slider from "../Slider/Slider";

const Home = () =>{
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
        </div>
        
    )
}

export default Home;