import React from "react";
import { ReactComponent as Logo } from '../images/Logo.svg';



export default function Header (){
    return (
        <div className="container">
        <nav className="navigation">
         <Logo className="logo"/>
         <ul className="navigation">
            <li><a href="/home" className="menu">Home</a></li>
            <li><a href="/about" className="menu">About</a></li>
            <li><a href="/menu" className="menu">Menu</a></li>
            <li><a href="/reservation" className="menu">Reservation</a></li>
            <li><a href="/order" className="menu">Order online</a></li>
            <li><a href="/login" className="menu">Login</a></li>
            </ul>
        </nav>
        </div>
    )
};