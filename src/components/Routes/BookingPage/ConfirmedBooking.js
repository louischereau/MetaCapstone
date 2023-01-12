import React, { useState, useEffect } from 'react';
import '../../styles/ConfirmedBooking.css';

const ConfirmedBooking = () => {

    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [guests, setGuests] = useState();

    useEffect(() => {

        const handleStorage = () => {
            let data = localStorage.getItem('bookings');
            data = JSON.parse(data);
            const lastBooking = data[Object.keys(data).length];
            setDate(lastBooking.date);
            setTime(lastBooking.time);
            setGuests(lastBooking.guests);
        }

        window.addEventListener('storage', () => {
            handleStorage();
        })

        return () => window.removeEventListener('storage', handleStorage())
    }, [])

    const people = "people";
    const person = "person";

    return (
        <div id="confirmation">
            <h1>Booking Confirmed!</h1>
            <p>You booked a table on <span>{date}</span> at <span>{time}</span> for <span>{guests}</span> {guests > 1 ? people : person}.</p>
        </div>
    )
}

export default ConfirmedBooking;