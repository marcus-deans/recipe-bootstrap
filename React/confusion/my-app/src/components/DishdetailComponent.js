import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, List } from 'reactstrap';

function RenderDishDetails( {selectDish} ){
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={selectDish.image} alt={selectDish.name} />
                <CardBody>
                <   CardTitle>{selectDish.name}</CardTitle>
                    <CardText>{selectDish.description}</CardText>
                </CardBody>
            </Card> 
        </div>
    );
}

function RenderComments( {cmts} ){
    if(cmts == null){
        return (<div></div>)
    }
    const comments = cmts.map(comment => {
        return (
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
            </li>
        )
    })
    return (
        <div className="container">
            <div className="col-12 col-md-5 m-1">
                <h4> Comments </h4>
                <ul className = "list-unstyled">
                    {comments}
                </ul>
            </div>
        </div>
        
    )
}

const DishDetail = (props) => {
    if(props.dish== null){
        return (<div></div>);
    }

    return(
        <div className="row">
            <RenderDishDetails dish={props.dish} />
            <RenderComments cmts={props.dish.comments} />
        </div>
    )
}

export default DishDetail;