import React from 'react'
import {HashLink} from "react-router-hash-link";
import {Link} from "react-router-dom";

function Header() {
  return (
    <nav>
        <h1>TechGyan</h1>
        <main>
            <HashLink to="/#home">Home</HashLink>
            <Link to="/contact">Contact</Link>
            <HashLink to="/#about">About</HashLink>
            <HashLink to={"/#brands"}>Brands</HashLink>
            <Link to="/service">Services</Link>
            
        </main>
    </nav>
  )
}

export default Header