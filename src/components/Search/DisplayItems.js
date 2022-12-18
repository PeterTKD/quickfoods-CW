import React from "react";
import Recipeitem from "./Recipeitem";
import { recipes } from "../../Data/data";


const DisplayItems = ({ foodList }) => {
    console.log(foodList);

    return (

        <div className="items-container">
            {foodList.map((food, index) => {
                return <Recipeitem eventKey={index} food={food} key={index} />;
            })}
        </div>
    );
};
export default DisplayItems;