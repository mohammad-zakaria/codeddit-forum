import React from 'react';
import ForumHome from '../ForumHome/ForumHome';
import Navbar from '../Header/Navbar/Navbar';
import data from "../data/data.json"

const Home = () => {

    const sticky = {
        position: "-webkit-sticky",
        position: "sticky",
        top: 0,
        padding: "5px"
      }
    return (

        <div>
            <div style={sticky} ><Navbar></Navbar></div>
            <div><ForumHome data = {data}></ForumHome></div>
        
        </div>
    );
};

export default Home;