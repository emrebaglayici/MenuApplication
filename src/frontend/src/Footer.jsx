import React from "react";
import instagramLogo from '../src/images/instagram.svg'
export default function Footer() {
    return (
        <div className="App">
            <p className="footer">Bizimle İletişime Geçin</p>
            <a href="tel:+905324113320">+90 532 411 33 20</a>
            <a  href="https://www.instagram.com/cafeheyday/">
                <img className="insta-logo" src={instagramLogo} alt="heyday-instagram" />cafeheyday
            </a>

        </div>
    );
}
