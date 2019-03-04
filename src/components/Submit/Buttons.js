import React from 'react';

const Buttons = ({placeOrder, length, clearBasket}) => {
    return(
        <div className="row">
            <div className="col SendButton">
              <button className="btn btn-dark btn-lg"
                onClick={() => placeOrder(length)}>Send Order!</button>
                <button className="btn btn-danger btn-lg button"
                onClick={() => clearBasket()}>Clear</button>
            </div>
        </div>
    )
}

export default Buttons;