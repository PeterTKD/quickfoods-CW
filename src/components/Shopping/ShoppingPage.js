import React from "react";
import ShoppingItem from "./ShoppingItem";
import './shopping.css';

function ShoppingPage() {

    var test = [];


    for (var i = 0, len = localStorage.length; i < len; ++i) {
        var cuurentitem = localStorage.getItem(localStorage.key(i));
        test.push(JSON.parse(cuurentitem))
    }
    //const saved = { ...localStorage };
    //  const initial = JSON.parse(saved);
    //const items = { ...localStorage };

    console.log('initial');
    console.log(test);
    //console.log(initial);
    return (
        <>
            <div className="container-menu">
                <h1 className="menu-header">Shopping List</h1>
                <div className="menu-content">
                    {test.map((shoppingitems, index) => {
                        return <ShoppingItem eventKey={index} shoppingitems={shoppingitems} key={index} />;
                    })}


                </div>
            </div>
        </>
    );
}
export default ShoppingPage;