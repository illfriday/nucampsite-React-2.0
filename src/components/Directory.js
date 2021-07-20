import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText } from 'reactstrap';


class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //we WERE storing in the STATE of this COMPONENT an ARRAY of OBJECTS('campsites') with PROPERTIES we can reference using the 'this' KEYWORD
      //We have NOW LIFTED THE STATE of 'campsites' to the PARENT COMPONENT
      selectedCampsite: null
      //We have now creating a selectedCampsites PROPERTY in the STATE OBJECT. this PROPERTY will be updated in the 'onCampsiteSelect' METHOD below
    };
  }
  onCampsiteSelect(campsite) {
    this.setState({selectedCampsite: campsite})
    //We are changing the 'selectedCampsites' PROPERTY in the STATE when this METHOD is called by the EVENT handler in the 'render()' METHOD for the {directory COMPONENT} below
    //we are using the setState method to change the STATE. we want to AVOID SETTING THE STATE DIRECTLY OUTSIDE OF THE CONSTRUCTOR
  }

  renderSelectedCampsite(campsite) {

    if (campsite) {
      return (
        <Card>
          <CardImg top src={campsite.image} alt={campsite.name} key={campsite.id}/>
          <CardBody>
            <CardTitle>{campsite.name}</CardTitle>
            <CardText>{campsite.description}</CardText>
          </CardBody>
        </Card>
      );
    }
    return <div />;
  }

  render() {
    //we are using the map() function on the 'campsites' ARRAY we have stored in the JSX. in the CALLBACK FUNCTION for the map(), we are telling jS to return a JSX div for each ITERATION within the map ARRAY. In React we should assign the top most element a unique KEY whenever we are rendering an ARRAY
    const directory = this.props.campsites.map(campsite => {
      return (
        <div key={campsite.id} className="col-md-5 m-1">
          <Card onClick={() =>this.onCampsiteSelect(campsite)}>
            <CardImg src={campsite.image} alt={campsite.name} />
            <CardImgOverlay>
              <CardTitle>{campsite.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    //we are going to use the jS VARIABLE {directory} in our JSX RETURN statement below. We write jS VARIABLES inside curly braces {} in JSX
    return (
      <div className="container">
        <div className="row">
          {directory}
        </div>
        <div className="row">
          <div className="col-md-5 m-1">
            {this.renderSelectedCampsite(this.state.selectedCampsite)}
          </div>
        </div>
        {/* <ExampleParentComponent /> */}
      </div>
    );
  }
}
//PASSING PROPS AND STATE EXAMPLE
//we create a PARENT COMPONENT in which we are storing a local STATE containing the PROPERTY of 'number' with a value of 333. Because we are rendering the CHILD COMPONENT within the PARENT, we can pass variables within the STATE to the CHILD as PROPS. We are also passing the custom ATTRIBUTE of 'greeting' as props in this example(not stored in STATE). PROPS are READ-ONLY DATA passed to a CHILD COMPONENT. This means sometimes we will need to LIFT UP THE STATE so multiple CHILD NODES can access the STATE data

// class ExampleParentComponent extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       number: 333
//     }
//   }
//   render() {
//     return (
//       <ExampleChildComponent number={this.state.number} greeting="Hello World"/>
//     );
//   }
// }

// class ExampleChildComponent extends Component {
//   render() {
//     return (
//       <div>{this.props.number} {this.props.greeting}</div>
//     );
//   }
// }

export default Directory;
