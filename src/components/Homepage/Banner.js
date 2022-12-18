import React from "react";
import coverpage from './screen1.jpg';
import '../../App.css';
import { Link } from "react-router-dom";



function Banner() {
    <div className="banner-container"  >
        <img src={coverpage} alt="Cover Page" />
        <h1>Welcome to Quick foods website</h1>
        <p>Start looking for recipes now</p>
        <btn>
            <Link className='btn' to="/search"> Search Now </Link>
        </btn>
    </div>


}
export default Banner