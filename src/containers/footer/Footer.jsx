import React from 'react';
import Import from '../../assets/import.png'
import './footer.css';

const Footer = () => (
    <div className="gpt3__footer section__padding" id='news'>
        <div className="gpt3__footer-heading">
            <h1 className="gradient__text">Unleash the Power of Knowledge, Explore the Latest with IMPORT News</h1>
        </div>

        <div className="gpt3__footer-btn">
            <p>Explore News</p>
        </div>

        <div className="gpt3__footer-links">
            <div className="gpt3__footer-links_logo">
                <img src={Import} alt="gpt3_logo" />
                <p>IMPORT computer science hub, <br /> All Rights Reserved</p>
            </div>
            <div className="gpt3__footer-links_div">
                <h4>IMPORT</h4>
                <p>Career Resource</p>
                <p>Research Resource</p>
                <p>Courses Resource</p>
                <p>News Resource</p>
            </div>
            <div className="gpt3__footer-links_div">
                <h4>Company</h4>
                <p>Terms & Conditions </p>
                <p>Privacy Policy</p>
                <p>Contact</p>
            </div>
            <div className="gpt3__footer-links_div">
                <h4>Get in touch</h4>
                <p>085-132567</p>
                <p>info@import.com</p>
            </div>
        </div>

        <div className="gpt3__footer-copyright">
            <p>@2023 IMPORT All rights reserved.</p>
        </div>
    </div>
);

export default Footer;

