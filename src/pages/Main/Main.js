import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills,Education, Experience, Contacts, Projects, Services, } from '../../components'
import { headerData } from '../../data/headerData'
import ChatBot from '../../components/ChatBot/ChatBot'
function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            {/* <Achievement /> */}
            <Services />
            {/* <Testimonials /> */}
            {/* <Blog /> */}
            <Contacts />
            <Footer />
            <ChatBot />
        </div>
    )
}

export default Main
