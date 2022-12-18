
import React, { useEffect, useState, useCallback } from "react";
import Nutrition from "../components/Ingredients/Nutrition";

const FetchData = ({ query }) => {
    const [nutrition, setNutrition] = useState({
        sugar_g: " ",
        fiber_g: " ",
        serving_size_g: " ",
        sodium_mg: " ",
        name: " ",
        potassium_mg: " ",
        fat_saturated_g: " ",
        fat_total_g: " ",
        calories: " ",
        cholesterol_mg: " ",
        protein_g: " ",
        carbohydrates_total_g: " ",
    });

    const fetchData = useCallback(() => {
        const url =
            "https://calorieninjas.p.rapidapi.com/v1/nutrition?query=" + query;
        console.log(url);
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "c65cf91fabmsh5b88462cc4236c1p1724aajsnc8144e58306a",
                "X-RapidAPI-Host": "calorieninjas.p.rapidapi.com",
            },
        };
        fetch(url, options)
            .then((response) => response.json())
            .then((incomingData) => {
                console.log(incomingData);
                if (incomingData.items.length !== 0) {
                    setNutrition(incomingData.items[0]);
                }
            });
    }, [query]);

    useEffect(() => {
        fetchData();
    }, [fetchData, query]);

    return (
        <div>
            <Nutrition item={nutrition} />
        </div>
    );
};
export default FetchData;