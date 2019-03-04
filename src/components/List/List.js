import React from 'react';
import ListItem from './ListItem';

const List = ({items, alterQuantity, deleteItem}) => {
    
    if(items.length >= 1){
        return(
            items.map((item) => {
                return <ListItem 
                    key={Object.keys(item)[0]}
                    item={item} 
                    alterQuantity={alterQuantity}
                    deleteItem={deleteItem}
                    value={Object.keys(item)[0]}/>
            })
        )
    } else {
        return(
            <div className="row ListItem EmptyRow">
                <h5 className="EmptyText">Add something to your list!</h5>
            </div>
        )
    }
}

export default List;