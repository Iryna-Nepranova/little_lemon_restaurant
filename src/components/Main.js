import React from "react";
import { Button } from "./Button";
import restauranfood  from "../images/restauranfood.jpg";
import greekSalad from "../images/greek.jpg";
import bruchetta from "../images/bruchetta.svg";
import dessert from "../images/dessert.jpg";

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
           <h1 className="hero-title">Little Lemon</h1>
            <h3 className="sub-title">Chicago</h3>
            <p className="hero-description">
                Lorem ipsum dolor sit amet, consectetur
             adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
             magna aliqua.
             </p>
             <Button text={"Reserve a table"}/>
             <img src={restauranfood} alt="restauranfood" className="restauranfood"/>
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
      <li key={dish.id}>
          <div>
            <img src={dish.imgUrl} alt="dishes" width={170} height={250}/>
          <b>{dish.name}</b>
          <p>
            {dish.description}
          </p>
          <p>
          $ {dish.price}
          </p>
          <Button text={"Order a delivery"}/>
        </div>
      </li>
    );

    return(
    <div className="specials-title">
             <h3>This week specials!</h3>
             <Button text={"Online Menu"}/>
             <ul>{listCards}</ul>

    </div>
    )
};