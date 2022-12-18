import React from 'react'
import './recipeitem.css'
import { useState, useEffect } from "react";

const Recipeitem = ({ food }) => {

    const [likeCount, setLikeCount] = useState(food.rating);
    const [activeBtn, setActiveBtn] = useState("none")
    const [name, setItem] = useState("");

    const handleLikeClick = () => {
        if (activeBtn === "none") {
            setLikeCount(likeCount + 1);
            setActiveBtn("like");
            food.rating = likeCount;
            return;
        }
        if (activeBtn === 'like') {
            setLikeCount(likeCount - 1);
            setActiveBtn("none");
            food.rating = likeCount;
            return;
        }

        if (activeBtn === "dislike") {
            setLikeCount(likeCount + 1);
            setLikeCount(likeCount - 1);
            setActiveBtn("like");
            food.rating = likeCount;
        }

        food.rating = likeCount;
    };

    const handleDisikeClick = () => {
        if (activeBtn === "none") {
            setLikeCount(likeCount - 1);
            setActiveBtn("dislike");
            food.rating = likeCount;
            return;
        }

        if (activeBtn === 'dislike') {
            setLikeCount(likeCount + 1);
            setActiveBtn("none");
            food.rating = likeCount;
            return;
        }

        if (activeBtn === "like") {
            setLikeCount(likeCount + 1);
            setLikeCount(likeCount - 1);
            setActiveBtn("dislike");
            food.rating = likeCount;
        }

    };

    const handleAddToMenu = () => {

        localStorage.setItem(food.title, JSON.stringify(food));
        console.log(localStorage.getItem(food.title));


    };

    const handleAddToCart = () => {
        localStorage.setItem(food.title, JSON.stringify(food));
        console.log(localStorage.getItem(food.title));
    };

    const saved = localStorage.getItem('name');
    const initial = JSON.parse(saved);

    /*
        useEffect(() => {
            localStorage.setItem('name', JSON.stringify(name));
        }, [name]);
    */

    return (

        <div className='containeritem'>
            <h1 className='title'>{food.title}</h1>
            <p className='rating'>Rating: {likeCount}</p>
            <p className='servings'>{food.servings}</p>
            <p className='ingredients-head'>Ingredients</p>
            <div className='ingredients-box'>
                <p>{food.ingredients}</p>
            </div>

            <i onClick={handleAddToCart} className="fa-solid fa-cart-shopping"></i>
            <i onClick={handleAddToMenu} className="fa-solid fa-bars"></i>

            <button className={`btn1 ${activeBtn === "like" ? "like-active" : ""}`} onClick={handleLikeClick}>
                <i className="fa-solid fa-heart"></i>
            </button>
            <button className={`btn2 ${activeBtn === "like" ? "like-active" : ""}`} onClick={handleDisikeClick}>
                <i className="fa-solid fa-thumbs-down"></i>
            </button>
        </div>
    );
};
export default Recipeitem;