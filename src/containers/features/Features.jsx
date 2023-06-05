import React from 'react'
import './features.css'
import { Feature } from '../../components'
const featuresData = [
    {
        title: 'Tailored Learning Resources',
        text: 'We provide a well-crafted study recommendation plan and a curated selection of courses and resources. We helps beginners in coding to have a structured learning path, enhance their understanding of computer science principles, and gain practical skills through hands-on experience.'

    },
    {
        title: 'Career Advancement Opportunities',
        text: 'We recognize the importance of continuous improvement and career growth for experienced coders. You can access funding for your innovative projects, fostering creativity and entrepreneurship. Additionally, IMPORT serves as a gateway to lucrative high-salary job opportunities within the computer science industry, connecting top-tier talent with leading employers.'

    },
    {
        title: 'Vibrant Community and Networking',
        text: 'Being a member of the IMPORT platform means being part of a vibrant community of like-minded individuals. Users can engage in stimulating discussions, share insights, and forge meaningful connections with others in the computer science field.'

    },
    {
        title: 'Latest Research and Industry Insights',
        text: 'We ensure that our members stay at the forefront of advancements in computer science. IMPORT provides access to the latest research papers, industry insights, and cutting-edge tools.'

    }
]
const Features = () => {
    return (
        <div className='gpt3__features section__padding' id='career'>
            <div className='gpt3__features-heading'>
                <h1 className='gradeient__text'>Unlock Your Potential, Shape the Future with IMPORT</h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className='gpt3__features-container'>
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>
        </div>
    )
}

export default Features
