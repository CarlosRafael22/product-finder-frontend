import React from "react";

export default (props) => {
    return (
        <div className="product-card" >
            <a href={props.link}>
                <img src={props.image_url} className="mr-3 card-image" alt={props.name} width="200" height="200" />
                <div className="media-body card-body">
                <h6 className="mt-0">{props.name}</h6>
                    <p>R$</p>
                </div>
                <div className="card-extra">
                    <p className="extra-store">Visto em:</p>
                    <i className="fa fa-heart-o"></i>
                </div>
            </a>
        </div>
    );
};