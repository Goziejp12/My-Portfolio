import React from 'react'
import Nav from './components/Nav'
import HeroSection from './components/HeroSection'
import Main from './components/Main'
import Footer from './components/Footer'
import data from './data'

export default function App() {
    // console.log(data)
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
            <Nav />
            <HeroSection />
            <div className='main--layout'>
                {items}
            </div>
            <Footer />
        </>
    )
}