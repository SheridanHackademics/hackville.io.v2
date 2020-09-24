import React from "react"
import About from "./about"
import Faq from "./faq"
import Footer from "./footer"
import GetInvolved from "./get-involved"
import Header from "./header"
import Landing from "./landing"
import PreviousYear from "./previous-year"
import Sponsors from "./sponsors"

 const App = () => 
    (
        <>
        <Header />
            <Landing />
            <About />
            <PreviousYear />
            <Faq />
            <GetInvolved />
            <Sponsors />
        <Footer />
        </>
    )

export default App