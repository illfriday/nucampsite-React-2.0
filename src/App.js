import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/MainComponent";
import "./App.css";

//We are now importing the {CAMPSITES } data, setting it into the local STATE as 'campsites' and passing it as PROPS to the Directory CHILD COMPONENT

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
        
      //inside <Directory /> campsites is passed as this.props.campsites
    );
  }
}

export default App;
//can only be ONE default export form a javaScript module. A jS module contains at least one export

//class COMPONENT syntax  requires 'import React,{ Component } from 'react';
//requires a return statement wrapped in the render() METHOD. this should RETURN a single JSX ELEMENT, IE  a <div> or <React.fragment>  OR  <>

//class App extends Component {
//   render() {
//     return (
//       <div>....</div>
//     )
//   }
// }

// React COMPONENTS are reuable/modular pieces of code that are used to define the elements of our application.
