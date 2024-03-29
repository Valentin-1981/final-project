import "./Card.css";
import Button from "../Button/Button";
// import { useEffect } from "react";

function Card({ img, title, description, price, onClick = () => {} }) {
    return (
        <div className="Card" onClick={() => onClick(title)}>
            <img alt="text" className="Card-img" src={img} />
            <div className="Card-container">
                <h2 className="Card-title common-header">{title}</h2>
                <p className="Card-description">{description}</p>
                <div className="Card-price common-price">{price}</div>
                <div className="Card-button">
                    <Button>Купить</Button>
                </div>
            </div>
        </div>
    );
}

export default Card;
