import React from 'react';

const ListItem = ({item, alterQuantity, deleteItem, value}) => {

    return(
        <div className="row ListItem">
            <div className="col ListWrapper">
            <h4 className="ListText">{Object.keys(item)}</h4>
                <div className="ButtonWrapper">
                    <button className="btn btn-success ListButton" 
                        onClick={() => alterQuantity(value, "increase")}><p>+</p></button>
                    <div className="ItemTotal">{Object.values(item)}</div>
                    <button className="btn btn-danger ListButton"
                        onClick={() => alterQuantity(value, "decrease")}><p>-</p></button>
                    <button className="btn btn-warning ListButton"
                        onClick={() => alterQuantity(value, "clear")}><p>x</p></button>
                </div>
            </div>
        </div>
    );
}

export default ListItem;