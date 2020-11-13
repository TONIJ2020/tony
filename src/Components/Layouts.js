import React from 'react';
import MainNav from './../Components/Menu/MainNav';
import NavMenu from './../Components/Menu/NavMenu'
import Footer from './../Components/Footer';


const Layouts = (props) => {
    return(
        <div>
            <MainNav />
            <NavMenu />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layouts;