import React from 'react'

export default function Nav(props) {
    
    return (
        <nav>
            <div className='nav--left'>
                <svg className="portfolio-bag" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 24H2V36C2 37.0609 2.42143 38.0783 3.17157 38.8284C3.92172 39.5786 4.93913 40 6 40H34C35.0609 40 36.0783 39.5786 36.8284 38.8284C37.5786 38.0783 38 37.0609 38 36V24H22V28H18V24ZM18 22H0V10C0 7.8 1.8 6 4 6H12V4C12 2.93913 12.4214 1.92172 13.1716 1.17157C13.9217 0.421427 14.9391 0 16 0L24 0C25.0609 0 26.0783 0.421427 26.8284 1.17157C27.5786 1.92172 28 2.93913 28 4V6H36C37.0609 6 38.0783 6.42143 38.8284 7.17157C39.5786 7.92172 40 8.93913 40 10V22H22V18H18V22ZM24 6V4H16V6H24Z" fill="#00A483"/>
                </svg>
                <span>My Portfolio</span>
            </div>
            <i className="fa-solid fa-bars" onClick={props.handleClick}></i>
            <ul>
                <li className='desktop-menu'>Home</li>
                <li className='desktop-menu'>My Journey</li>
                <a href='https://drive.google.com/file/d/10Iu_arSNsHxNgCBM-ZA-VLTstVD22Mpy/view?usp=sharing' target='_blank'><li className='cv--btn'>My CV</li></a>
            </ul>
        </nav>
    )
}