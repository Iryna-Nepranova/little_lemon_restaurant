import React from "react";
import { Button } from "./Button";
import restauranfood  from "../images/restauranfood.jpg";
import greekSalad from "../images/greek.jpg";
import bruchetta from "../images/bruchetta.svg";
import dessert from "../images/dessert.jpg";
import delivery from "../images/delivery.png"

export default function Main (){
    return (
         <section>
            <HeroSection/>
            <Specials/>
           </section>
    )
};


function HeroSection (){
    return (
        <div className="hero-desc">
            <div className="container">
                <div className="hero-content">
                <div className="hero-textcontent">
            <h1 className="hero-title">Little Lemon</h1>
            <h3 className="sub-title">Chicago</h3>
            <p className="hero-description">
                Lorem ipsum dolor sit amet, consectetur
             adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
             magna aliqua.
             </p>
             <Button text={"Reserve a table"}/>
             </div>
             <div className="hero-img">
             <img src={restauranfood} alt="restauranfood" className="restauranfood"/>
          </div>
          </div>
          </div>
          </div>
    )
};
function Specials (){
    const dishes =[{
        id:0,
        imgUrl:greekSalad,
        name:'Greek salad',
        description:'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
        price: 12.99
    },
    {
        id:1,
        imgUrl: bruchetta,
        name:'Bruchetta',
        description:'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
        price: 5.99
    },
    {   id:2,
        imgUrl: dessert,
        name:'Lemon Dessert',
        description:'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
        price: 5.99
    },
]

    const listCards = dishes.map(dish =>
      <li key={dish.id} className="card">
          <div className="card-header" >
            <img src={dish.imgUrl} alt="dishes" width={265} height={185} />
          </div>
          <div className="card-main">
          <div className="dish-name-price">
          <p className="dish-name">{dish.name}</p>
          <p className="dish-price"> $ {dish.price}</p>
          </div>
          <p className="dish-description">
            {dish.description}
          </p>
          </div>
          <div className="card-footer">
          <a href="/" className="button-delivery">Order a delivery</a>
          <img src={delivery} alt="delivery" width={16} height={10}/>
        </div>
      </li>
    );

    return(
        <div className="container">
          <div className="specials-title">
             <h3>This week specials!</h3>
             <Button text={"Online Menu"}/>
             </div>
            <ul className="cards">{listCards}</ul>             
    </div>
    )
};