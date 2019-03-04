import React from 'react';

const BasketTotal = ({total}) => {
    return(
        <div className="row">
            <div className="col Item-total"><h5>Items in basket: {total}</h5></div>
        </div>
    );
}

export default BasketTotal;