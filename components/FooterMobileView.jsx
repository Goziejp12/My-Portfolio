import React from 'react'

export default function FooterMobileView() {
    return (
        <div className='footer-mobile-view'>
            <i class="fa-solid fa-house" onClick={() => window.location.href="/"}></i>
            <a href="https://www.linkedin.com/in/johnpaul-maduka" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/Goziejp12" target="_blank"><i class="fa-brands fa-square-github"></i></a>
            <a href="https://twitter.com/Engrjonech" target="_blank"><i class="fa-brands fa-square-twitter"></i></a>
            <a href="mailto:chigoziemaduka401@gmail.com" target="_blank"><i class="fa-regular fa-envelope"></i></a>
        </div>
    )
}