import React, { useState } from "react";
import FetchNutrition from "../../Data/FetchNutrition";
import './ingrediantsSearch.css'

function IngrediantsSearch() {
    const [searchString, setSearchString] = useState("");
    const [searchField, setSearchField] = useState("apple");

    function handleClick() {
        setSearchField(searchString);
    }

    return (
        <div className="container-ingrsearch">
            <div>
                <h1 className="header-search">Enter a food item to search for its nutritional value</h1>
                <input
                    className="form-control"
                    type="text"
                    placeholder="Search ..."
                    onChange={(e) => setSearchString(e.target.value)}
                />
                <button className="btn-search" onClick={handleClick}>Search</button>
            </div>
            <FetchNutrition query={searchField} />
        </div>
    );
}

export default IngrediantsSearch;