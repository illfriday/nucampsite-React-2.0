import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Directory from './components/Directory';


function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand>Nucamp</NavbarBrand>
        </div>
      </Navbar>
      <Directory />
    </div>
  );
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