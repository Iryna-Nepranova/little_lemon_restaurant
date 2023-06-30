import React from "react";
import { ReactComponent as Logo } from '../images/Logo.svg';



export default function Header (){
   
    return (
        <nav>
         <Logo/>
         <ul className="navigation">
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservation">Reservation</a></li>
            <li><a href="/order">Order online</a></li>
            <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    )
};