import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';


class App extends Component {

  handleOnClickItems() {
    this.props.dispatch({
      type: 'GET_COUNT_OF_ITEMS',
    });
  }

  handleOnClickUsers() {
    this.props.dispatch({
      type: 'GET_COUNT_OF_USERS',
    });
  }

  render() {
    debugger;
    return (
      <div className="App">
          <button onClick={() => this.handleOnClickItems()}>
            Click to change items count
            </button>
          <button onClick={() => this.handleOnClickUsers()}>
            Click to change user count
          </button>
          <p>{this.props.items.length}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { items: state.items }
   // This return value, is the value of the props 
  // that are added to the App component.
  // So by changing the key to the return value in mapStateToProps() 
  //we changed the name of the prop in App. 
}

export default connect(mapStateToProps)(App);
// whatever function we pass to the connect() function 
// will be called each time the state changes, and 
// the first argument to that function, 
// whatever its name, will be the state of the store.

//connect() function calls the mapStateToProps() function 
//each time there is a change in state

// mapStateToProps() can happily ignore the store's state and 
// return whatever it likes. We know that connect() takes 
// whatever the return value is of the mapStateToProps() 
// function and passes it to the component 
// that is in those last set of parentheses (in this case, App).

// we are taking a part of the store's state 
// and porting it to become props of the relevant 
// component, we say that we are mapping it as 
// props to the component, thus the name mapStateToProps.