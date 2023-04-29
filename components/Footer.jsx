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
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-square-github"></i>
                    <i class="fa-brands fa-square-twitter"></i>
                    <i class="fa-solid fa-envelope"></i>
                </div>
                <p className='rights'>Chigozie © All Rights Reserved</p>
            </div>
        </footer>
    )
}