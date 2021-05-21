import React from 'react'
import {Navbar, NavbarBrand} from 'reactstrap'

function Navigation() {
    return (
        <div>
             <Navbar dark color='dark' >
               <div className="container">
                   <div className="row">
                       <div className="col-6">
                        <NavbarBrand href='/' > Restaurant </NavbarBrand>
                       </div>
                   </div>
               </div>
               
            </Navbar>
        </div>
    )
}

export default Navigation
