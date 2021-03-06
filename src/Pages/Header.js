import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav'
// import { Link } from 'react-router-dom';
// import UrlCall from './../ContextApi/UrlCall'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Navbar from 'react-bootstrap/Navbar'
import { connect } from "react-redux";
import { setData } from './../Redux/actions/index'

class Header extends React.Component {
    render() {
        return (
            < Navbar bg="light" expand="lg" >
                <Navbar.Brand href="#home">LOGO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {/* just to show how the text would be shown live */}
                        <Nav.Link href="#home">Home <small>{this.props.text ? `[${this.props.text}]` : ''}</small></Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl ref={e => (this.text = e)} type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success" onClick={() => this.props.onSearchClick(this.text.value)}>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar >
        )
    }
}

const mapStateToProps = state => ({
    text: state.searchElem
});

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchClick: (text) => {
            dispatch(setData(text, 'searchElem'))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);