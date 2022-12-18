import React from 'react';

const ShoppingItem = ({ shoppingitems }) => {

    return (

        <div className='containeritem'>
            <h1 className='title'>{shoppingitems.title}</h1>

            <p className='ingredients-head'>To buy:</p>
            <p className='instructions'>{shoppingitems.ingredients}</p>


        </div>
    );
};

export default ShoppingItem;