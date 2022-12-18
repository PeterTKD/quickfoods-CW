import React from "react";
import MenuItem from "./MenuItem";
import './menupage.css';

function Menupage() {

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
                <h1 className="menu-header">Menu</h1>
                <div className="menu-content">
                    {test.map((menuitem, index) => {
                        return <MenuItem eventKey={index} menuitem={menuitem} key={index} />;
                    })}


                </div>
            </div>
        </>
    );
}
export default Menupage;