import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import cs from '../../assets/cs.png'
const Header = () => {
    return (
        <div className='gpt3__header section_padding' id='home'>
            <div className='gpt3__header-content'>
                <h1 className='gradient__text'>Prepare for Your Future</h1>
                <p>Welcome to our website, a comprehensive hub for computer science enthusiasts, professionals, and aspiring researchers. Our platform is dedicated to providing a wide range of resources tailored to support individuals pursuing a career in computer science and exploring research opportunities in this dynamic field.</p>
                <div className='gpt3__header-content__input'>
                    <input type="text" placeholder='Request' />
                    <button type='button'>Get Started</button>
                </div>

                <div className='gpt3__header-content__people'>
                    <img src={people} alt="people" />
                    <p>people requested access a visit in last 24 hours</p>
                </div>


            </div>
            <div className='gpt3__header-image'>
                <img src={cs} alt="cs" />
            </div>
        </div>
    )
}

export default Header
