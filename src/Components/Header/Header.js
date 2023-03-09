import React from 'react'
import Logo from './Images/m-logo.png'

const Header = () => {
    return (
        <header>
            <nav className="navbar pt-2 shadow-sm pb-2 bg-primary bg-gradient">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={Logo} alt="Logo" width="43" height="33"
                            className="d-inline-block align-text-top" />
                            <span className="text-light fw-bold font-monospace">E-education</span>
                    </a>
                    <span className="text-light fw-bold font-monospace text-end"><i className="fa fa-user-circle-o" aria-hidden="true"></i> A. M. Asky</span>
                </div>
            </nav>
        </header>
    )
}

export default Header