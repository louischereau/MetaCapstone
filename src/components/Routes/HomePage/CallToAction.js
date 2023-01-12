import React from 'react';
import '../../styles/CallToAction.css';
import Food from '../../assets/restauranfood.jpg';
import { useNavigate } from 'react-router-dom';


const CallToAction = () => {

    const navigate = useNavigate();

    const navigateToBookingPage = () => {
        navigate('/booking');
    };

    return (
        <div id="callToAction">
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    We are a family owned
                    Mediterranean restaurant,
                    focused on traditional recipes
                    served with a modern
                    twist.
                </p>
                <button onClick={navigateToBookingPage}>Reserve a Table</button>
            </div>
            <img src={Food} alt="Little Lemon Food" />
        </div>
    );
}

export default CallToAction