import React, { useState } from 'react';
import BookingSlot from './BookingSlot';
import '../../styles/BookingForm.css';

const BookingForm = (props) => {

    const dispatch = props.dispatch;
    const availableTimes = props.availableTimes;
    const submitForm = props.onSubmit;

    const [guests, setGuests] = useState(1);
    const [time, setTime] = useState(props.availableTimes.slots[0]);
    const [date, setDate] = useState(new Date().toLocaleDateString());
    const [occasion, setOccasion] = useState("None");

    const handleDateChange = (e) => {
        setDate(e.target.value);
        dispatch({ date: new Date(e.target.value) });
    }

    const clearForm = () => {
        setGuests(1);
        setDate(new Date().toLocaleDateString());
        setOccasion("None");
        setTime(props.availableTimes.slots[0]);
    }

    const saveStateToLocalStorage = (formData) => {

        let data = localStorage.getItem('bookings');

        data = JSON.parse(data);

        if (data !== null) {

            const length = Object.keys(data).length;

            data[length + 1] = formData;

            localStorage.setItem('bookings', JSON.stringify(data));
        }
        else {
            data = {
                1: formData
            }
            localStorage.setItem('bookings', JSON.stringify(data))
        }

    }

    const handleSubmit = (e) => {

        e.preventDefault();

        const formData = {
            date: date,
            time: time,
            guests: guests,
            occasion: occasion
        };

        submitForm(formData);

        saveStateToLocalStorage(formData);

        clearForm();
    }

    const renderListOfAvailableTimes = (availableTimes) => {
        return availableTimes.slots.map((availableTime) => {
            return <BookingSlot key={availableTime} slot={availableTime} />
        });
    }

    const isFormValid = () => {
        return;
    }

    return (
        <form style={{ display: "grid; max-width: 200px; gap: 20px" }} onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor="date">Choose date<sup style={{ color: 'red' }}>*</sup> </label>
                <input type="date" id="date" required="required" value={date} onChange={handleDateChange} min={new Date().toISOString().split('T')[0]} />
                <label htmlFor="time">Choose time<sup style={{ color: 'red' }}>*</sup> </label>
                <select id="time" required="required" value={time} onChange={(e) => { setTime(e.target.value) }}>
                    {renderListOfAvailableTimes(availableTimes)}
                </select>
                <label htmlFor="guests">Number of guests<sup style={{ color: 'red' }}>*</sup> </label>
                <input type="number" required="required" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => { setGuests(e.target.value) }} />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={(e) => { setOccasion(e.target.value) }}>
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <button type='submit' disabled={!isFormValid}>
                    Make Your Reservation
                </button>
            </fieldset>
        </form>
    );
}

export default BookingForm;
