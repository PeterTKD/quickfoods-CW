import React, { useState } from "react";
import './search.css';

import { recipes } from "../../Data/data";
import Recipeitem from "./Recipeitem";
import DisplayItems from "./DisplayItems"

console.log({ recipes })



function Searchpage({ details }) {
    const [searchField, setSearchField] = useState("");

    const filtered = details.filter((entry) => {
        return entry.title.toLowerCase().includes(searchField.toLowerCase());

    });


    console.log(filtered);

    
    return (
        <div className="container">
            <div className='input-wrap'>
                <i className="fas fa-search"></i>
                <label
                    for="product-search"
                    id="input-label"
                >
                    Product Search
                </label>
                <input

                    type="text"
                    name="product-search"
                    id="product-search"
                    placeholder="Search Products"
                    onChange={(e) => setSearchField(e.target.value)}
                />
                <i
                    className="fas fa-times"
                ></i>
            </div>
            <div className="items-container">
                <DisplayItems foodList={filtered} />
            </div>
        </div>

    );
}

export default Searchpage;