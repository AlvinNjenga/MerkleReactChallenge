### Alvin Njenga - Merkle React Code Challenge

## Overview

This is my high level overview of the shopping cart that I have created for the challenge and my decisions.

To do this, I will move through the requirements I was given, how I have implemented them and structured the app.

As it is not a very complicated application, most of the programming logic and state management happens in App.js. The variables held in state are an array of items, the total number of items in that array called totalNo, and two boolean values relating to whether an order had been placed successfully or unsuccessfully.

Functions are defined in App.js because they affect the state of the application and then have their functionality passed down as props to child components.

## Adding Items

The input component recieves as props the function addItem. addItem takes two variables, e which is an event, and the user input from a form. e.preventDefault() is used to stop the form on submitting from reloading the entire page, and there is validation that an input has been passed.

That value is passed through a helper function (defined in the helpfully named helpers folder. I know, creative right?) which takes in a string and returns the first letter capitalised with every other letter lower case. This enabled me to avoid the shopping cart being case sensitive, as previously "bread" and "Bread" would appear as seperate items. I also thought the list looked better with consistent capitalisation - personal preference.

The current state of items is copied and a for loop is ran on that cloned array, to see if the user input value matches an already existing item in the shopping cart. If it does, the amount of that item in the cloned array is incremented. That cloned state is then set as state. 

If that doesn't happen, and the input doesn't already exist in the cart, a new object is added into the items array, with the input as the key and 1 as the value. It also increments the value of totalNo which represents the total number of items in the cart.

## Display a list 

The List folder contains three components. 

BasketTotal simply displays the current total of items in the cart, and is passed that state as props.

List renders either two things based on the state of its parent - if there are no items in the cart, it returns a message telling the user to add items to their cart. If there is at least one item, it maps over each one, returning a component called ListItem.

I used the lifecycle hook componentDidMount to set the correct total number of items on load if the app is loaded with items already in state. This could be tweaked to be called after an update in the case of fetching an array over an API call. 

## Users can remove, increase or decrease quantity of an item in the cart.

ListItem is passed the alterQuantity function (which used to be three functions but suffered from a lot of code repitition to destructure and clone the items array, as well as more props being passed). This function is passed the value of the item (it's key or "name") as well as how to alter it. The three options essentially have the functions loop over the item array, affecting only the item in question to either increment, decrement or completely remove from the array.

If the number is decreased below 1, the item then is completely removed from the cart as the user would expect. Whenever an item is removed from the array, totalNo is decreased by 1. 

To avoid having to manually remove every item in the case of clearing the entire cart, I added a button and a function that would simply set the items array in state to an empty array, and reset the total number to 0.

## Submit an order

When the user is done shopping, the printOrder function will have a look at the items in state and for each object, it will return a string describing the number of unit/units (another helpers function) and what the item is. This is then logged onto the console with a message thanking them for their business. A message also appears on the cart telling them their order has been successful, that is triggered by orderPlaced being set to true.

The printOrder function was wrapped in a timeout to simulate a real server call and I also added a check to ensure there was items in the cart to be ordered. If not, the state of orderPlaced isn't triggered, and instead orderFailed is set to true. In this case, the Success componenet is another conditional component, that will then instead of displaying a success message, will return an error to the screen.


Thank you for taking the time to read this, and I can't wait to find out how I could have made this about half as complicated as I have done!