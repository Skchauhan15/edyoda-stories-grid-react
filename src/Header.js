import React from "react";
import styles from "./Header.module.css"

class Header extends React.Component{
render(){
    return(
       <header>
       <div className="head">
            <span className="logo">EDYODA</span>
            <span className="headcategories">Explore Categories<select id="dropdown"></select></span>
        </div>
        <div className="stories">Stories</div>
        <div className="rightside">
            <div className="headertitle">EdYoda is free learning and knowledge
sharing platform for techies</div>
            <div className="button">
                Go to Main Website
            </div>
        </div>
       </header>
    );
}
}
export default Header;