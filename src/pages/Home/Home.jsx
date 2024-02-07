import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Events from '../Events/Events'
import Gallery from '../Gallery/Gallery'
import Interviews from '../Interviews/Interviews'
import Hero from '../../components/Hero/Hero'

const Home = () => {
    return (

        <main>
            <Hero/>
            <About />
            <Events />
            <Interviews />
            <Gallery />
            <Contact />
        </main>
    )
}

export default Home