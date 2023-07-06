import React from "react";
import { Button } from "./Button";
import restauranfood  from "../images/restauranfood.jpg";
import greekSalad from "../images/greek.jpg";
import bruchetta from "../images/bruchetta.svg";
import dessert from "../images/dessert.jpg";
import delivery from "../images/delivery.png";
import picture from "../images/picture.png";
import aboutPhoto from "../images/img1.png";

export default function Main (){
    return (
         <section>
            <HeroSection/>
            <Specials/>
            <Testimonials/>
            <DescriptionSection/>
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
 function Testimonials (){
    const reviews = [{
        id:0,
        name:'User 1',
        imgUrl:picture,
        review:'Review text'
    },
    {
        id:1,
        name:'User 2',
        imgUrl:picture,
        review:'Review text'
    },
    {
        id:2,
        name:'User 3',
        imgUrl:picture,
        review:'Review text'
    },
    {
        id:3,
        name:'User 4',
        imgUrl:picture,
        review:'Review text'
    }]

    const listTest = reviews.map(review =>
        <li key={review.id} className="card-test">
            <p className="rating">
                Rating
            </p>
            <div className="user-test">
                <img src={picture} alt="user" width={47} heigh={46}/>
                <p className="user-name">{review.name}</p>
            </div>
            <p className="review-test" >{review.review}</p>
        </li>
    );
    return(
        <div className="testimonials">
            <div className="container">
                <h3 className="test-section">Testimonials</h3>
                <ul className="listTestcard">{listTest}</ul>
            </div>
        </div>
    )
 }

 function DescriptionSection (){
    return (
        <div className="about container">
        <div className="about-desc ">
            <h2 className="about-title">Little Lemon</h2>
            <h4 className="about-subtitle">Chicago</h4>
            <p className="about-desc">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. </p>
            </div>
            <img src={aboutPhoto} alt="dishes" className="about-img"/>
</div>
    )
 }