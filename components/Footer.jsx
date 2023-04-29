import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className='text'>
                <h1>I believe in<span>hardwork</span></h1>
                <p>chigoziemaduka401@gmail.com</p>
            </div>
            
            <div className='socials-n-rights'>
                <div className='social--icons'>
                    <a href="https://www.linkedin.com/in/johnpaul-maduka" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/Goziejp12" target="_blank"><i class="fa-brands fa-square-github"></i></a>
                    <a href="https://twitter.com/Engrjonech" target="_blank"><i class="fa-brands fa-square-twitter"></i></a>
                    <a href="mailto:chigoziemaduka401@gmail.com" target="_blank"><i class="fa-solid fa-envelope"></i></a>
                </div>
                <p className='rights'>Chigozie © All Rights Reserved</p>
            </div>
        </footer>
    )
}