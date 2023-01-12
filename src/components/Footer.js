import React from 'react';
import './styles/Footer.css';
import Logo from "./assets/Logo.svg";

const Footer = () => {
    return (
        <footer>
            <img src={Logo} alt="Logo" />
            <p>© 2023 Little Lemon, All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;