import React from 'react';
import '../../styles/Specials.css';
import Salad from '../../assets/greek salad.jpg';
import Bruschetta from '../../assets/bruchetta.svg';
import Dessert from '../../assets/lemon dessert.jpg';
import Special from './Special';

const Specials = () => {

    const data = [
        {
            image: Salad,
            title: "Greek salad",
            price: "$12.99",
            text: "The famous Greek salad of crispy lettuce, pepper, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."

        },
        {
            image: Bruschetta,
            title: "Bruschetta",
            price: "$ 5.99",
            text: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
        },
        {
            image: Dessert,
            title: "Lemon Dessert",
            price: "$ 5.00",
            text: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        }
    ]

    const renderListOfSpecials = (data) => {
        return data.map((description) => {
            return <Special data={description} />
        });
    }

    return (
        <div id="menu">
            <div className="header">
                <h1>This weeks specials!</h1>
                <button>Online Menu</button>
            </div>
            <div className="specials">
                {renderListOfSpecials(data)}
            </div>
        </div>
    );
}

export default Specials;