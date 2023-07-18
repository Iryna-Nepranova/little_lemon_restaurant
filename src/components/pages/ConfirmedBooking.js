import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import imgHeaderConfirmation from "../../images/restaurant.jpg";

export const ConfirmedBooking =() => {
 
    return(
        <section className="confirmation-page">
            <img src={imgHeaderConfirmation} alt="confirmation" className="confirmation-photo"/>
        <h3 className="confirmation-title">Your reservation is successfully submitted!</h3>
        <p className="confirmation-info">A confirmation message has been sent to your email.</p>
        <p className="confirmation-gratitude">Thanks for choosing <span className="logo-confirmation">Little Lemon restaurant </span>!</p>
        <div>
            <p className="confirmation-preparation">You can also see our online Menu or make an order online</p>
            <Link to="/menu" className="menu"><Button className="button" text={"Menu"}/></Link>
            <Link to="/order" className="menu"><Button className="button" text={"Order online"}/></Link>
        </div>
        </section>
    )
}