import './styles/Nav.css'
import React, { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {

    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    const handleClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <>
            <nav ref={navRef}>
                <ul>
                    <li><a href="/#callToAction" onClick={handleClick('callToAction')}>Home</a></li>
                    <li><a href="/#about" onClick={handleClick('about')}>About</a></li>
                    <li><a href="/#menu" onClick={handleClick('menu')}>Menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/order">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><button className="nav-btn nav-close-btn" onClick={showNavBar}><FaTimes /></button></li></ul>
            </nav>

            <button className="nav-btn" onClick={showNavBar}>
                <FaBars />
            </button>
        </>
    );
}

export default Nav;