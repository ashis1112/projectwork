import React from 'react'
import {NavLink} from 'react-router-dom'

const Signedinlink=()=>{
    return(
        <ul className='right'>
            <li><NavLink to='/'>New Projects</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>AB</NavLink></li>

        </ul>
    )
}

export default Signedinlink