import React from "react";

const Card = (props) => {
    return (
            <div className="card col-12 col-md-3 mb-3" style={{width: "325px", height: "500px"}}>
                <img src={props.imagen} className="card-img-top" alt="imagen"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
    );
};

export default Card;