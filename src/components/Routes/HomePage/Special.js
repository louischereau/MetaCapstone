import React from 'react';
import '../../styles/Special.css';

const Special = (props) => {

    const image = props.data.image;
    const title = props.data.title;
    const price = props.data.price;
    const text = props.data.text;

    return (
        <div id="special">
            <div className="image-container">
                <img src={image} alt={title} id="dish-image" />
            </div>
            <div className="description">
                <div className='dish-price'>
                    <h3>{title}</h3>
                    <p className='price'>{price}</p>
                </div>
                <p>{text}</p>
                <div id="delivery">
                    <p>Order a delivery</p>
                    <img src="" alt="delivery-icon" />
                </div>
            </div>
        </div>
    );
}

export default Special;