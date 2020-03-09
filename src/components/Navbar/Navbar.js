import React, { Component } from 'react';
import './Navbar.css';
// import logo from '../../images/logo.png';
import { GoThreeBars as Hamburger } from "react-icons/go";
import { HashLink as Link } from 'react-router-hash-link';


export default class Navbar extends Component {
    state = {
        isOpen: false,
        scrolled: false
    }

    listenScrollEvent = e => {
        if (window.scrollY > 400) {
            this.setState({ scrolled: true })
        } else {
            this.setState({ scrolled: false })
        }
    }


    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    componentDidMount() {
        window.addEventListener("scroll", this.listenScrollEvent)
    }

    render() {
        return (
            <nav className={"navbar " + (this.state.scrolled ? "nav-scrolled" : "")}>
                <div className="nav-center">
                    <div className="nav-header">
                        <Link smooth to="#top" className="text-link">
                            <div className="logo-div">
                                <p className={"logo-text " + (this.state.scrolled ? "nav-scrolled" : "")}>
                                    Tim Stark
                                </p>
                            </div>
                            {/* <img src={logo} alt="logo" style={{ width: "250px", height: "auto" }} /> */}
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <Hamburger className={"nav-icon " + (this.state.scrolled ? 'nav-scrolled' : '')} />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav nav-scrolled" : "nav-links " + (this.state.scrolled ? 'nav-scrolled' : '')}>
                        <li>
                            <Link smooth to="#about">About</Link>
                        </li>
                        <li>
                            <Link smooth to="#projects">Projects</Link>
                        </li>
                        <li>
                            <a href="https://drive.google.com/file/d/1ryocksh7vhpRQTMPjuH5V1NDCsAr2ep6/view?usp=sharing" target="_blank">Resume</a>
                        </li>
                        <li>
                            <Link smooth to="#contact">Contact</Link>
                        </li>
                    </ul>
                </div >
            </nav >
        );
    }
}