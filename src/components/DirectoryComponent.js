import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

function RenderDirectoryItem({campsite, onClick}) {
  return(
     <Card onClick={() => onClick(campsite.id)}>
            <CardImg src={campsite.image} alt={campsite.name} />
            <CardImgOverlay>
              <CardTitle className="card-title">{campsite.name}</CardTitle>
            </CardImgOverlay>
          </Card>
  );
}
//RenderDirectoryItem is a FUNCTIONAL COMPONENT. It is receiving PROPS 'campsite' and 'onClick' from the 'Directory' FUNCTIONAL COMPONENT via OBJECT DESTRUCTURING inside the PARAMETER LIST.


function Directory(props){
  //We have updated the 'Directory' to a FUNCTIONAL COMPONENT. In a FUNCTIONAL COMPONENT we no longer use the 'this' KEYWORD when using PROPS('this.props...' becomes 'props...')

    //we are using the map() function on the 'campsites' ARRAY we have stored in the JSX. in the CALLBACK FUNCTION for the map(), we are telling jS to return a JSX div for each ITERATION within the map ARRAY. In React we should assign the top most element a unique KEY whenever we are rendering an ARRAY
    const directory = props.campsites.map((campsite) => {
      return (
        <div key={campsite.id} className="col-md-5 m-1">
         <RenderDirectoryItem campsite={campsite} onClick={props.onClick}/>
        </div>
      );
    });
    //we are going to use the jS VARIABLE {directory} in our JSX RETURN statement below. We write jS VARIABLES inside curly braces {} in JSX
    return (
      <div className="container">
        <div className="row">{directory}</div>
        {/* <ExampleParentComponent /> */}
      </div>
    );
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
