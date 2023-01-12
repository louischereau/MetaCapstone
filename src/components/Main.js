import React, { useReducer } from 'react';
import Homepage from './Routes/HomePage/Homepage';
import BookingPage from './Routes/BookingPage/BookingPage';
import { Routes, Route, useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from './API.js';
import ConfirmedBooking from './Routes/BookingPage/ConfirmedBooking';

const Main = () => {

    const navigate = useNavigate();

    const submitForm = (formData) => {

        const status = submitAPI(formData);

        if (status) {
            navigate("booking-confirmation");
        }
    }

    const updateTimes = (state, action) => {

        const times = fetchAPI(action.date);
        return { slots: times };
    }

    const initializeTimes = () => {
        const times = fetchAPI(new Date());
        return { slots: times };
    }

    const initialTimes = initializeTimes();

    const [availableTimes, dispatch] = useReducer(updateTimes, initialTimes);

    return (
        <main>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} onSubmit={submitForm} />} />
                <Route path="/booking-confirmation" element={<ConfirmedBooking />} />
            </Routes>
        </main>
    )
}

export default Main;