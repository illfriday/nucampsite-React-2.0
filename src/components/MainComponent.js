import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { CAMPSITES } from "../shared/campsites";
import Directory from "./DirectoryComponent";
import CampsiteInfo from "./CampsiteInfoComponent";
//We are now importing the {CAMPSITES } data, setting it into the local STATE as 'campsites' and passing it as PROPS to the Directory CHILD COMPONENT

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
      selectedCampsite: null,
    };
  }
  onCampsiteSelect(campsiteId) {
    this.setState({ selectedCampsite: campsiteId });
    //We are changing the 'selectedCampsites' PROPERTY in the STATE when this METHOD is called by the EVENT handler in the 'render()' METHOD for the {directory COMPONENT} below
    //we are using the setState method to change the STATE. we want to AVOID SETTING THE STATE DIRECTLY OUTSIDE OF THE CONSTRUCTOR
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand>Nucamp</NavbarBrand>
          </div>
        </Navbar>
        <Directory
          campsites={this.state.campsites}
          onClick={(campsiteId) => this.onCampsiteSelect(campsiteId)}
        />
        <CampsiteInfo
          campsite={
            this.state.campsites.filter(
              (campsite) => campsite.id === this.state.selectedCampsite
            )[0]
          }
        />
      </div>
      //inside <Directory /> campsites is passed as this.props.campsites
    );
  }
}

export default Main;
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
