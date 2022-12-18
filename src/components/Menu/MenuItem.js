import React from 'react';

const MenuItem = ({ menuitem }) => {

    return (

        <div className='containeritem'>
            <h1 className='title'>{menuitem.title}</h1>
            <p className='servings'>{menuitem.servings}</p>
            <p className='ingredients-head'>Ingredients</p>
            <p className='instructions'>{menuitem.instructions}</p>
            <div className='ingredients-box'>
                <p>{menuitem.ingredients}</p>
            </div>

        </div>
    );
};

export default MenuItem;