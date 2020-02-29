import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { limitString } from './../Utility/Utility'
class LoopNews extends React.Component {
    render() {
        return (
            this.props.data.map((singleData) => (
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
            ))

        );
    }
}

export default LoopNews;