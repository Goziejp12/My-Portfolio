import React from 'react'

export default function Sidebar(props) {
    const handlePortfolioClick = () => (window.location.href = '/')
    return (
        <div className='sidebar'>
            <i className="fa-solid fa-xmark" onClick={props.handleXmarkClick}></i>
            <ul>
                <li onClick={handlePortfolioClick}>Home</li>
                <li>My Journey</li>
                <a href='https://drive.google.com/file/d/10Iu_arSNsHxNgCBM-ZA-VLTstVD22Mpy/view?usp=sharing' target='_blank'>
                    <li>My Resume</li>
                </a>
            </ul>
        </div>
    )
}