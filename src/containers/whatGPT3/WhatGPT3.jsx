import React from 'react'
import { Feature } from '../../components';
import './whatGPT3.css'
const WhatGPT3 = () => {
    return (
        <div className='gpt3__whatgpt3 section__margin' id='about'>
            <div className='gpt3__whatgpt3-feature'>
                <Feature title='what is IMPORT' text='IMPORT is a pioneering platform that serves as a one-stop hub for computer science enthusiasts, professionals, and aspiring researchers. Our mission is to empower individuals in their journey toward a successful career in computer science by providing them with a comprehensive range of tailored resources and opportunities.' />
            </div>
            <div className='gpt3__whatgpt3-heading'>
                <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
                <p>Explore The Library</p>
            </div>
            <div className='gpt3__whatgpt3-container'>
                <Feature title='Career' text='We dedicate to empowering individuals in their pursuit of a successful career in computer science.' />
                <Feature title='Research' text='We serve as a valuable resource for computer science enthusiasts, professionals, and aspiring researchers who are eager to stay updated with the latest advancements in the field.' />
                <Feature title='Course' text='We offer a comprehensive selection of courses tailored to meet the learning needs of computer science enthusiasts, professionals, and aspiring researchers.' />
            </div>
        </div>
    )
}

export default WhatGPT3
