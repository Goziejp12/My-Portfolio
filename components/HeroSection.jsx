import React from 'react'

export default function HeroSection() {
    console.log(window.innerWidth)
    return (
        <section className='hero--section'>
            <h1>frontend<span> Engineer</span></h1>
            <h2>chigozie maduka</h2>
            <div className='profile--bio'>
                <img src='./images/CJ.jpg' alt='profile picture' />
                <p>
                    Goal-oriented frontend engineer with strong commitment to 
                    collaboration. My tech stacks are Javascript and React. 
                    I also have basic knowledge of UI/UX design with Figma. 
                    I’m always ready to learn and eager to help a progressive 
                    team achieve its objectives.
                </p>
            </div>
            
        </section>
    )
}