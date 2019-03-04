import React from 'react';

class Input extends React.Component {

    render(){
        let { addItem } = this.props;
        return(
            <div className="row">
                <form className="form-inline Form" onSubmit={(e) => {addItem(e, this.newItem.value); this.newItem.value = ""} } >
                    <div className="form-group Input-wrapper">
                        <input type="text" className="form-control" placeholder="Add an item..." ref={input => this.newItem = input}/>
                    </div>
                    <button type="submit" className="btn btn-primary Input-button">Add item</button>
                </form>
            </div>
        );
    }
} 

export default Input;