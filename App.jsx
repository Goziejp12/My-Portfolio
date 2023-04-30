import React, { useState } from 'react'
import Nav from './components/Nav'
import HeroSection from './components/HeroSection'
import Main from './components/Main'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import data from './data'

export default function App() {
    const [isMobileView, setIsMobileView] = useState(false)

    function handleClick() {
        return (
            setIsMobileView(prevIsMobileView => !prevIsMobileView)
        )
    }

    function handleXmarkClick() {
        return (
            setIsMobileView(prevIsMobileView => !prevIsMobileView)
        )
    }

    const items = data.map(item => {
        return (
            <Main 
                key={item.id}
                items={item}
            />
        )
    })
    return (
        <>
            <Nav 
                handleClick={handleClick}
            />
            {isMobileView && <Sidebar handleXmarkClick={handleXmarkClick}/>}
            <HeroSection />
            <h1 className='main-header'>My Completed Projects</h1>
            <div className='main--layout'>
                {items}
            </div>
            <Footer />
        </>
    )
}