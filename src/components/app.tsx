import React from "react"
import About from "./about/about"
import Faq from "./faq/faq"
import Footer from "./footer/footer"
import GetInvolved from "./get-involved/get-involved"
import Header from "./header/header"
import Landing from "./landing/landing"
import PreviousYear from "./previous-years/previous-year"
import Sponsors from "./sponsors/sponsors"

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