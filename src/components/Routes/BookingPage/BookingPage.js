import React from 'react';
import '../../styles/BookingPage.css';
import BookingForm from './BookingForm';

const BookingPage = (props) => {

    const dispatch = props.dispatch;
    const availableTimes = props.availableTimes;
    const submitForm = props.onSubmit;

    return (
        <div id="bookingpage">
            <h1>Booking Page</h1>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} onSubmit={submitForm} />
        </div>
    );
}

export default BookingPage;