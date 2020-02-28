import React, { useState, useEffect, setState } from 'react'
import UseBaseContext from './../ContextApi/UseBaseContext'
import UriCall from './../ContextApi/UrlCall'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { limitString } from './../Utility/Utility'
import { connect } from "react-redux";

const Home = (props) => {
    /* get the context instance */
    const { getData } = UseBaseContext();
    const { defaultCall } = UriCall();
    const [data, setData] = useState([]);

    /* load the data by default */
    useEffect(() => {
        //component did mount
        defaultCall().then((data) => {
            setData(data);
        });
    }, []);//the [] is useful to load the data only once

    /* have the loop in the const */
    const loop = data.map((singleData) => (
        <div className="col-lg-4" key={singleData.id.toString()}>
            <Card>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>{singleData.original_title}</Card.Title>
                    <Card.Text>
                        {limitString(singleData.overview, 100)}...
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    ));

    /* all of the maon content goes here  */
    return (
        <section className="home-page m-top-3">
            <div className="row1 ov-y-hide">
                <div className="container">
                    <div className="col-lg-12">
                        <div className="main-container">
                            Hello {props.text}

                            {/* lets loop things here */}
                            <div className="row">
                                {loop}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const mapStateToProps = state => {
    return {
        text: state.text
    }
}

export default connect(mapStateToProps)(Home);