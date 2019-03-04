import React from 'react';

const Success = ({orderPlaced, orderFailed}) => {
    if(orderPlaced === true){
        return(
            <div className="wrapper">
                <h4 className="Success-text">Your order was a success! Please see the console.</h4>
            </div>
        )
    } else if(orderFailed === true) {
        return(
            <div className="wrapper">
                <h4 className="NotSuccess-text">Your order order failed. Please check console.</h4>
            </div>
        )
    } else {
        return(
            <div></div>
        )
    }
}

export default Success;