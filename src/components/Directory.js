import React, { Component } from "react";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //we are storing in the STATE of this COMPONENTan ARRAY of OBJECTS('campsites') with PROPERTIES we can reference using the 'this' KEYWORD
      campsites: [
        {
          id: 0,
          name: 'React Lake Campground',
          image: 'assets/images/react-lake.jpg',
          elevation: 1233,
          description: "Nestled in the foothills of the Chrome Mountains, this campground on the shores of the pristine React Lake is a favorite for fly fishers."
        },
        {
          id: 1,
          name: 'Chrome River Campground ',
          image: 'assets/images/chrome-river.jpg',
          elevation: 877,
          description: "Spend a few sunny days and starry nights beneath a canopy of old-growth firs at this enchanting spot by the Chrome River."
        },
        {
            id: 2,
            name: 'Breadcrumb Trail Campground',
            image: 'assets/images/breadcrumb-trail.jpg',
            elevation: 2901,
            description: "Let NuCamp be your guide to this off-the-beaten-path, hike-in-only campground."
        },
        {
            id: 3,
            name: 'Redux Woods Campground',
            image: 'assets/images/redux-woods.jpg',
            elevation: 42,
            description: "You'll never want to leave this hidden gem, deep within the lush Redux Woods."
        }
      ]
    };
  }

  render() {
    //we are using the map() function on the 'campsites' ARRAY we have stored in the JSX. in the CALLBACK FUNCTION for the map(), we are telling jS to return a JSX div for each ITERATION within the map ARRAY. In React we should assign the top most element a unique KEY whenever we are rendering an ARRAY
    const directory = this.state.campsites.map(campsite => {
      return (
        <div key={campsite.id} className="col">
          <img src={campsite.image} alt={campsite.name} />
          <h2>{campsite.name}</h2>
          <p>{campsite.description}</p>
        </div>
      );
    });
    //we are going to use the jS VARIABLE {directory} in our JSX RETURN statement below. We write jS VARIABLES inside curly braces {} in JSX
    return (
      <div className="container">
        <div className="row">
          {directory}
        </div>
      </div>
    );
  }
}
export default Directory;
