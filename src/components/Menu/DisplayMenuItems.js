import React from "react";
import MenuItem from "./MenuItem";



const DisplayItems = ({ menuList }) => {
    console.log(menuList);

    return (

        <div className="items-container">
            {menuList.map((menuitem, index) => {
                return <MenuItem eventKey={index} menuitem={menuitem} key={index} />;
            })}
        </div>
    );
};
export default DisplayItems;