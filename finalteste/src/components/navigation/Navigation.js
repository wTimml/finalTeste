import React from 'react';
import './navigation.css'

const Navigation = ({ onRouteChange, isSignedIn }) => {

    if (isSignedIn) {
        return(
        <nav >
            <div class="nav-wrapper">
                <a href="#" class="brand-logo">Logo</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="" onClick={() => onRouteChange('signout')}>Sign Out</a></li>
                </ul>
            </div>
            </nav>
            )
    } else {
        return (

            <nav>
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo">Logo</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="" onClick={() => onRouteChange('signin')}>Signin</a></li>
                        <li><input type="submit" value="Register" onClick={() => onRouteChange('register')}/></li>

                </ul>
                </div>
            </nav>
            )
    }
       

}

export default Navigation;