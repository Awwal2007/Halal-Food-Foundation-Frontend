import React, { useRef } from 'react';
import './css/Header.css'
import { Link, useLocation } from 'react-router-dom';

import Clock from "../components/Clock";
import backgroundImage from '../assets/Gold Background2.jpg'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { TiHome } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";

import logo from '../assets/jdkffed.png'

const Header = () => {
    const detailsRef = useRef(null);
    const location = useLocation();
    const currentPath = location.pathname;

    const isActive = (path) => currentPath === path ? 'button active' : 'button';
    
    const handleLinkClick = () => {
        if (detailsRef.current) {
            detailsRef.current.open = false; // close the <details>
        }
    };

    
    return (
        <>
        <div className='header-container'>
            <div className='clock-container'>
                <Clock/>
            </div>
            <div style={{background: `url(${backgroundImage})`, objectFit: "unset", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className='kingdom-name' >
                <div style={{display: "flex", gap: "20px", marginTop: "-10px"}}>
                    <Link to='/'>
                        <img style={{width: "80px"}} src={logo} alt="logo" />
                    </Link>
                    <h2 style={{marginBottom: "10px", fontSize: "35px", marginTop: "30px"}}>Halal Food Foundation</h2>
                </div>
                {/* <p>"The child who listens to prospers"</p> */}
            </div>
            <div className='nav-bar'>
                <div className='desktop-nav'>
                    <div><Button component={Link} to='/' className='button active'><TiHome size={28} /></Button></div>
                    <div><Button component={Link} to='/' className={isActive('/')}>Home</Button></div>
                    <div><Button href='#about-us' className={isActive('/oluwo')}>About us</Button></div>
                    <div><Button href='#board-of-trustees' className={isActive('/oluwo')}>Board Of Trustees</Button></div>
                    {/* <div><Button component={Link} to='/iwo-land' className={isActive('/iwo-land')}>Iwo Land</Button></div> */}
                    <div><Button component={Link} to='/blogs' className={isActive('/blogs')}>Blogs</Button></div>
                    <div><Button component={Link} to='/gallery' className={isActive('/gallery')}>Gallery</Button></div>
                    {/* <div style={{ flex: "1" }}><Button component={Link} to='/resources' className={isActive('/resources')}>RESOURCES AND HELP</Button></div> */}
                    {/* <div className='search-button'><FaSearch size={18} /></div> */}
                </div>

                <div className='mobile-nav'>
                    <details ref={detailsRef}>
                    <summary>☰ Menu</summary>
                    <div className='mobile-menu'>
                        <Button component={Link} to='/' className={isActive('/')} onClick={handleLinkClick}><TiHome size={24} /> Home</Button>
                        <Button href='#about-us' className={isActive('/oluwo')} onClick={handleLinkClick}>About Us</Button>
                        <Button href='#board-of-trustees' className={isActive('/oluwo')} onClick={handleLinkClick}>Board Of Trustees</Button>
                        {/* <Button component={Link} to='/iwo-land' className={isActive('/iwo-land')}>Iwo Land</Button> */}
                        <Button component={Link} to='/blogs' className={isActive('/blogs')} onClick={handleLinkClick}>Blogs</Button>
                        <Button component={Link} to='/gallery' className={isActive('/gallery')} onClick={handleLinkClick}>Gallery</Button>
                        {/* <Button component={Link} to='/resources' className={isActive('/resources')}>RESOURCES AND HELP</Button> */}
                    </div>
                    </details>
                </div>
            </div>
        </div>
        </>
    );
}


export default Header