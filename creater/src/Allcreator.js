import React from 'react'
import Header from './Header'
import Contant from './Contant'
import Slider from './Slider'
import Information from './Information'
import Footer from './Components/Adminpanel/Footer'
import HeaderForCreator from './HeaderForCreator'

function Allcreator() {
    return (
        <>

            <HeaderForCreator />
            <Contant />
            <Slider />
            <Information />
            <Footer />

        </>

    )
}

export default Allcreator
