import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/research.png'
const Possibility = () => {
    return (
        <div className='gpt3__possibility section__padding' id='research'>
            <div className='gpt3__possibility-image'>
                <img src={possibilityImage} alt="possibiliry" />
            </div>
            <div className='gpt3__possibility-content'>
                <h4>Request Early Access to Get Started</h4>
                <h1 className='gradient-text'>Explore, Innovate, and Discover with IMPORT Research</h1>
                <p>As a member of IMPORT's research community, you gain access to a wealth of research papers, industry insights, and the latest advancements in the field of computer science. Stay at the forefront of emerging technologies, explore groundbreaking concepts, and gain deep insights from experts in various domains.</p>
                <h4>Start Your Research Journey</h4>
            </div>
        </div>
    )
}

export default Possibility
