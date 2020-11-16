import React from 'react';
import SecNav from '../Components/Menu/SecNav';
import MainNav from './../Components/Menu/MainNav';
import Footer from './../Components/Footer';


const Layouts = (props) => {
    return(
        <div>
            <MainNav />
            <SecNav />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layouts;