import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'



function NavBar() {


    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-black ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src="/logo.png" alt="123" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to={"/"} className="nav-link text-white" > Home</Link >
                                </li>
                                <li className="nav-item">
                                    <Link to={"/games"} className="nav-link text-white" > Games</Link >

                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">non servo a nulla </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <Outlet />
        </>
    )
}

export default NavBar
