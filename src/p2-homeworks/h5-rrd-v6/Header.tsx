import React from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from '../h5/Routes';

function Header() {
    return (
        <div>
            <NavLink to={PATH.PRE_JUNIOR}></NavLink>


        </div>
    )
}

export default Header
