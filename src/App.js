import React, { Component } from 'react';
import Input from './components/Input/Input';
import BasketTotal from './components/List/BasketTotal';
import List from './components/List/List';
import Buttons from './components/Submit/Buttons';
import Success from './components/Submit/Success';
import { pluraliseUnit } from './components/helpers/HelperFunc';
import { capitalFirstLetter } from './components/helpers/HelperFunc';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      items: [
        {"Bread": 1},
        {"Milk": 2}
      ],
      totalNo: 0,
      orderPlaced: false,
      orderFailed: false
    }
    this.addItem = this.addItem.bind(this);
    this.printOrder = this.printOrder.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.alterQuantity = this.alterQuantity.bind(this);
    this.clearBasket = this.clearBasket.bind(this);
  }

  //Add item checks to see if input value already exists - if so, it increments the value by 1
  // and if not, it creates a new item object.
  addItem = (e, input) => {
    e.preventDefault();
    if(!input){ return; }

    let { items, totalNo } = this.state;
    let capitalInput = capitalFirstLetter(input);

    for(let i=0; i < items.length; i++){
      let cloneState = [...items];
      let item = capitalFirstLetter(Object.keys(items[i])[0]);

      if(capitalInput === item) {
        cloneState[i][capitalInput] += 1;
        
        this.setState({
          items: cloneState
        });
        return;
      } 
    }

    this.setState({
      items: [
        ...this.state.items,
        {[capitalInput]: 1},
      ],
      totalNo: totalNo + 1
    })
  }

  // Dependent on what the value of alter is, it will either increment or decrement the value of the item
  // in the state. If the alter = clear, it will remove the item from the state completely.
  alterQuantity = (value, alter) => {
    let { items, totalNo } = this.state;
    let cloneState = [...items]

    if (alter === "increase"){
      for(let i =0; i < cloneState.length; i++){
        let item = Object.keys(cloneState[i]).toString();
  
        if(item === value){
          cloneState[i][value] += 1;
        }
      }

    } else if (alter === "decrease"){
      for(let i =0; i < cloneState.length; i++){
        let item = Object.keys(cloneState[i]).toString();
  
        if(item === value){
          cloneState[i][value] -= 1;
          if (cloneState[i][value] < 1){
            cloneState.splice(i, 1)
            this.setState({totalNo: totalNo - 1})
          }
        }
      }

    } else if (alter === "clear") {
      for(let i =0; i < cloneState.length; i++){
        let item = Object.keys(cloneState[i]).toString();
  
        if(item === value) {
          cloneState.splice(i, 1)
  
          this.setState({
            items: cloneState,
            totalNo: totalNo - 1
          })
        }
      }
    }

    this.setState({
      items: cloneState
    })
  }

  printOrder = () => {
    let { items } = this.state;
    let listOrder = (items) => {
    let orderConsole = "";
    
      for(let i = 0; i < items.length; i++){
        let number = Object.values(items[i]);
        let item = Object.keys(items[i]).toString().toLowerCase();

        //Pluralise unit returns correctly formatted string with the correct unit/units used..
        let literalString = pluraliseUnit(number, item);
        orderConsole += literalString;
      }
      return orderConsole;
    }

    console.log("Thank you for your order. You have ordered:\n\n" + listOrder(items) + "\nWe hope you enjoy your shopping!");

    this.setState({
      orderPlaced: true
    })
  }

  placeOrder = (length) => {
    setTimeout(() => {
      if (length > 0) {
        this.printOrder();
      } else {
        console.log("You need to have someting in your basket first!")
        this.setState({
          orderFailed: true,
          orderPlaced: false
        })
      }
    }, 1000)
  }

  clearBasket = () => {
    this.setState({
      items: []
    })
  }

  componentDidMount() {
    let total = this.state.items.length;
    this.setState({
      totalNo: total
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">

          <div className="row">
            <div className="col Header">YOUR BASKET</div>
          </div>

          <Input addItem={this.addItem}/>
          <BasketTotal total={this.state.totalNo} />
          <List items={this.state.items} alterQuantity={this.alterQuantity} />
          <Buttons placeOrder={this.placeOrder} length={this.state.items.length} clearBasket={this.clearBasket} />
          <Success orderPlaced={this.state.orderPlaced} orderFailed={this.state.orderFailed} />

        </div>
      </div>
    );
  }
}

export default App;
