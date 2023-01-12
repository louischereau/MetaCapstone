import Nav from './Nav';
import Logo from "./assets/Logo.svg";
import './styles/Header.css';
import React from 'react';

const Header = () => {

    // const [show, setShow] = useState(false);
    // const prevY = useRef(0);

    // useEffect(() => {

    //     const handleScroll = (e) => {

    //         e.preventDefault();

    //         if (window.scrollY > prevY.current) {
    //             setShow(true);
    //         }
    //         else if (window.scrollY < prevY.current) {
    //             setShow(false)
    //         }

    //         prevY.current = window.scrollY;
    //     }

    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // })

    return (
        <header>
            <img src={Logo} alt="Logo" />
            <Nav />
        </header>
    );
}

export default Header;