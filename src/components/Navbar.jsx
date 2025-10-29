import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import cv from '../components/assets/D_React_cv.pdf'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
//import 'boxicons'
import img from  '../components/images/cropped_circle_image.png'

import { IoMenu } from "react-icons/io5";
import { HiOutlineX } from "react-icons/hi";





const Navbar = () => {
    let[menu , setMenu] = useState(false);
   

     
    return ( 
        <nav>
            <div className="logo">
                 <img src={img} alt="" style={{height:"30px", width:"30px",borderRadius:"50px",border:"2px solid #94ffa1" }} />
                <Link to="/"><h1>Dwarkesh</h1></Link>
               
                    
            </div>
            

            <div className="nav-links">
                <Link to="contact-me" smooth={true} offset={-40}>Contact me</Link>
                <Link to="more" smooth={true} offset={-80}>Know more</Link>
                <a href={cv} download={true}>Download resume</a>
                <Link to="projects" smooth={true}>Projects</Link>
            </div>

            <div className="hamberger">
                <span onClick={()=>{setMenu(!menu)}}>
                    {!menu ? <IoMenu style={{color:"#94ffa1",fontSize:"35px"}} /> : <HiOutlineX  style={{color:"#94ffa1",fontSize:"35px"}} /> }
                    {/* {!menu ? <i className='bx bx-menu'></i> :<i class='bx bx-menu-alt-left'></i>} */}
                </span>
                {menu && <div className="menu-links" data-aos="fade-left">
                                <Link to="contact-me" smooth={true} offset={-40}>Contact me</Link>
                                <Link to="more" smooth={true} offset={-80}>Know more</Link>
                                <a href={cv} download={true}>Download resume</a>
                                <Link to="projects" smooth={true}>Projects</Link>
                        </div>}
            </div>
        </nav>
    );
}

export default Navbar;


// npm start --host 192.168.1.111