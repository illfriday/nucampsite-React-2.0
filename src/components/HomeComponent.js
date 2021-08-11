import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { Loading } from "./LoadingComponent";

function RenderCard({ item, isLoading, errMess }) {
  if (isLoading) {
    return <Loading />;
  }
  if (errMess) {
    return <h4>{errMess}</h4>;
  }

  return (
    <Card>
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
}

//we are DESTRUCTURING the 'item' in the PARAMETER LIST. 'item' is passed as PROPS for each INSTANCE of the 'RenderCard' FUNCTIONAL COMPONENT. WE ARE PASSING A DIFFERENT PROP INTO 'HomeComponent' from 'MainComponent' each time... 'campsite', 'partner', 'promotion'. These ultimately reference the files in the ./shared folder. All the files have PROPERTIES named 'image', 'description', etc.

export default function Home(props) {
  return (
    <div className="container">
      <div className="container">
        <div className="row">
          <div className="col-md m-1">
            <RenderCard
              item={props.campsite}
              isLoading={props.campsitesLoading}
              errMess={props.campsitesErrMess}
            />
          </div>
          <div className="col-md m-1">
            <RenderCard item={props.promotion} />
          </div>
          <div className="col-md m-1">
            <RenderCard item={props.partner} />
          </div>
        </div>
      </div>
    </div>
  );
}
