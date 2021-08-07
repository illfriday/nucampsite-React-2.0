import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    //We are using the built-in jS bind() METHOD on the 'Header' CLASS COMPONENT's METHODS so they can refer to 'Header' when using the 'this' KEYWORD. This is so we don't use the internal FUNCTION SCOPE of 'this' inside the METHODS(FUNCTIONS) and can access and setState() the PROPERTIES stored in STATE
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleLogin(event) {
    // console.log("hi");
    alert(
      `Name:${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`
    );
    this.toggleModal();
    event.preventDefault();
  }

  // Modal;
  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>NuCamp</h1>
                <h2>a better way to camp</h2>
              </div>
            </div>
          </div>
        </Jumbotron>
        <Navbar dark sticky="top" expand="md">
          <div className="container">
            <NavbarBrand className="mr-auto">
              <img
                src="/assets/images/logo.png"
                alt="Nucamp Logo"
                height="30"
                width="30"
              />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <i className="fa fa-home fa-lg" /> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/directory">
                    <i className="fa fa-list fa-lg" /> Directory
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <i className="fa fa-info fa-lg" /> About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <i className="fa fa-address-card fa-lg" /> Contact Us
                  </NavLink>
                </NavItem>
              </Nav>
              <span className="navbar-txt ml-auto">
                <Button outline onClick={this.toggleModal}>
                  <i className="fa fa-lg fa-sign-in" /> Login
                </Button>
              </span>
            </Collapse>
          </div>
        </Navbar>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  innerRef={(input) => (this.username = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  innerRef={(input) => (this.password = input)}
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="remember"
                    innerRef={(input) => (this.remember = input)}
                  />
                  Remember Me
                </Label>
              </FormGroup>
              <Button
                type="submit"
                value="submit"
                color="primary"
                onClick={this.handleLogin}
              >
                Login
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

//we are creating a Modal with a Login form below the Navbar. Setting built-in 'reactstrap' attributes of 'isOpen' and 'toggle'. 'isOpen' is tied to the BOOLEAN STATE property 'isModalOpen'. When we 'toggle' the MODAL, we run the METHOD 'toggleModal()' on the 'Header' CLASS COMPONENT. 'toggleModal()' sets the BOOLEAN STATE property 'isModalOpen' to the opposite of it's current BOOLEAN VALUE(true= false)

//toggle='toggleModal" on the ModalHeader provides a way to close the MODAL
//We attach an onCLick ATTRIBUTE  of 'toggleModal()' on a <Button> inside the <Collapse> 'reactstrap' COMPONENT so we can view the button when the MODAL is collapsed

//we are creating an UNCONTROLLED FORM inside the <Modal>. This <Form> will contain it's own "source of truth" separate from the STATE. 3 'reactstrap' <FormGroup>'s with <Input> s and <Label>s(htmlFor= instead of for= IN JSX). These are similar to HTML elements.
//set up 'handleLogin()' METHOD on the "Header" CLASS COMPONENT. Prevents page from reloading event.'preventDefault()' and closes the MODEL 'toggleModal()'. We are attaching 'innerRefs' to the <Input>s inside the <Form>,  matching the name= ATTRIBUTE of the <Input>. these innerRefs are passed inside the EVENT HANDLER 'onClick' of the SUBMIT calling 'handleLogin()'. We can access the VALUE of the input inside 'handleLogin' METHOD
