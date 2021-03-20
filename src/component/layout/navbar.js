import React from 'react'
import {Link} from 'react-router-dom'
import Signedinlink from './signinlinks'
import Signedoutlink from './signoutlinks'

const Navbar=()=>{
    return(
        <nav className='nav-wrapper grey darker-3'>
            <div className="container">
                <Link to='/' className='brand-logo'>Project Work</Link> 
                <Signedinlink />
                <Signedoutlink />
            </div>
        </nav>
    )
}

export default Navbar