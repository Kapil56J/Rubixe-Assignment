//import { render } from "@testing-library/react";
import { Component } from "react";
import "./NavbarStyles.css";
//import logo from "./assets/white-rubixe-logo.png";

class Navbar extends Component {
    state = {clicked : false};

    handleClick = () => {
        this.setState({clicked: 
            !this.state.clicked})
    }
    render(){

    return(
        <>
        <nav>
            <img style={{ height:"50px", margin:"10px"}} src="./assets/white-rubixe-logo.png" alt="" />

        <div>
            <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                <li><a href="index.html">HOME</a></li>
                <li><a href="index.html">SERVICES</a></li>
                <li><a href="index.html">PRODUCTS</a></li>
                <li><a href="index.html">AI INTERNSHIP</a></li>
                <li><a href="index.html">CAREER</a></li>
                <li><a href="index.html">BlOG</a></li>
                <li><a href="index.html">ABOUT</a></li>
                <li><a href="index.html">CONTACT US</a></li>
            </ul>
        </div>

        <div id="mobile" onClick={this.handleClick}>
            <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>

        </div>
        </nav>
        </>
    )
    }
}
export default Navbar;
