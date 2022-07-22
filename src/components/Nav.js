import React, { useState } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse
} from 'mdb-react-ui-kit';

{/* <nav className="navbar navbar-expand-lg navbar-light bg-light float-right navigation"> in case I want to change from MDB to basic HTML/Bootstrap */ }

function Nav({ currentPage, handlePageChange }) {
    const [showNavColorSecond, setShowNavColorSecond] = useState(false);

    return (
        <>
            <MDBNavbar expand='lg' dark bgColor='dark'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarColor02'
                        aria-controls='navbarColor02'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavColorSecond(!showNavColorSecond)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
                        <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
                            <MDBNavbarItem className='active'>
                                <MDBNavbarLink aria-current='page' href='#'>
                                    Home
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>

                                <MDBNavbarLink
                                    href="#Bio"
                                    onClick={() => handlePageChange("Bio")}
                                    className={
                                        currentPage === "Bio" ? "nav-link active" : "nav-link"
                                    }>
                                    Bio
                                </MDBNavbarLink>

                            </MDBNavbarItem>
                            <MDBNavbarItem>

                                <MDBNavbarLink href="#Portfolio"
                                    onClick={() => handlePageChange("Portfolio")}
                                    className={
                                        currentPage === "Portfolio" ? "nav-link active" : "nav-link"
                                    }>
                                    Portfolio
                                </MDBNavbarLink>

                            </MDBNavbarItem>
                            <MDBNavbarItem>

                                <MDBNavbarLink href="#Resume"
                                    onClick={() => handlePageChange("Resume")}
                                    className={
                                        currentPage === "Resume" ? "nav-link active" : "nav-link"
                                    }>
                                    Resume
                                </MDBNavbarLink>

                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
}

export default Nav;