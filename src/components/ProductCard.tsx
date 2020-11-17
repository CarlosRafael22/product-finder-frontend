import React from "react";

type Props = {
    name: string,
    link: string,
    image_url: string,
    price: number
}

export default (props: Props) => {
    return (
        <div className="product-card" >
            <a href={props.link}>
                <img src={props.image_url} className="mr-3 card-image" alt={props.name} width="200" height="200" />
                <div className="media-body card-body">
                <h6 className="mt-0">{props.name}</h6>
                    <p>R${props.price}</p>
                </div>
                <div className="card-extra">
                    <p className="extra-store">Visto em:</p>
                    <i className="fa fa-heart-o"></i>
                </div>
            </a>
        </div>
    );
};