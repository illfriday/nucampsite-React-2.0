import React, { Component } from "react";
import Header from "./HeaderComponent";
import Directory from "./DirectoryComponent";
import About from "./AboutComponent";
import CampsiteInfo from "./CampsiteInfoComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { addComment } from "../redux/ActionCreators";
import { connect } from "react-redux";

// import Contact from "./ContactComponent";

//We are now importing the {CAMPSITES } data, setting it into the local STATE as 'campsites' and passing it as PROPS to the Directory CHILD COMPONENT

//we are NOW TRANSFERRING THE STATE DATA TO THE the REDUX STORE

const mapStateToProps = (state) => {
  return {
    campsites: state.campsites,
    comments: state.comments,
    partners: state.partners,
    promotions: state.promotions,
  };
};

const mapDispatchToProps = {
  addComment: (campsiteId, rating, author, text) =>
    addComment(campsiteId, rating, author, text),
};

class Main extends Component {
  // onCampsiteSelect(campsiteId) {
  //   this.setState({ selectedCampsite: campsiteId });
  //We are changing the 'selectedCampsites' PROPERTY in the STATE when this METHOD is called by the EVENT HANDLER in the 'render()' METHOD for the {directory COMPONENT} below
  //we are using the setState method to change the STATE. we want to AVOID SETTING THE STATE DIRECTLY OUTSIDE OF THE CONSTRUCTOR
  // }

  render() {
    const HomePage = () => {
      return (
        <Home
          campsite={
            this.props.campsites.filter((campsite) => campsite.featured)[0]
          }
          partner={this.props.partners.filter((partner) => partner.featured)[0]}
          promotion={
            this.props.promotions.filter((promotion) => promotion.featured)[0]
          }
        />
      );
    };

    const CampsiteWithId = ({ match }) => {
      return (
        <CampsiteInfo
          campsite={
            this.props.campsites.filter(
              (campsite) => campsite.id === +match.params.campsiteId
            )[0]
          }
          comments={this.props.comments.filter(
            (comment) => comment.campsiteId === +match.params.campsiteId
          )}
          addComment={this.props.addComment}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/directory"
            render={() => <Directory campsites={this.props.campsites} />}
          />
          <Route exact path="/contactus" component={Contact} />
          <Route
            exact
            path="/aboutus"
            render={() => <About partners={this.props.partners} />}
          />
          <Route path="/directory/:campsiteId" component={CampsiteWithId} />
          <Redirect to="/home" />
        </Switch>

        <Footer />
      </div>
      //inside <Directory /> campsites is passed as this.props.campsites
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
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
