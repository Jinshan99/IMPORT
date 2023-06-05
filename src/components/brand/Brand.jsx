import React from 'react'
import './brand.css'
import { slack, google } from './imports';
// import { github, slack, linkedin, google, coursera } from './imports';
const Brand = () => {
    return (
        <div className='gpt3__brand section_padding'>
            {/* <div><img src={github} alt="github" /></div> */}
            <div><img src={slack} alt="slack" /></div>
            {/* <div><img src={linkedin} alt="linkedin" /></div> */}
            <div><img src={google} alt="google" /></div>
            {/* <div><img src={coursera} alt="coursera" /></div> */}
        </div>
    )
}

export default Brand
