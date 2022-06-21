import React from 'react';
import logo from '../images/logo2.png';
import './footer.css';

const Footer = () => {
    return (
        <footer >
            <div className="footer">
             <img src={logo} alt="logo" sizes='1'></img><p>&copy; Beats Ahoy 2022. All rights reserved.</p>
            </div>
        </footer>
    )
}
export default Footer;