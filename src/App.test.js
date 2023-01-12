import { render, screen, fireEvent } from '@testing-library/react';
import Main from './components/Main';
import BookingForm from './components/Routes/BookingPage/BookingForm';
import { fetchAPI } from './components/API'
import { BrowserRouter } from 'react-router-dom';

describe("Booking Form", () => {

  const extractTimeSlots = (collection) => {
    let values = [];
    for (var i = 0; i < collection.length; i++) {
      values.push(collection.item(i).value);
    }
    return values;
  }

  test('Renders the BookingForm', () => {
    render(<BrowserRouter><Main /></BrowserRouter>);
    const reservationButton = screen.getByRole('button', { name: 'Reserve a Table' })
    fireEvent.click(reservationButton);
    const buttonElement = screen.getByText("Make Your Reservation");
    expect(buttonElement).toBeInTheDocument();
  })

  test('initializeTimes initialises time slots', () => {
    render(<BrowserRouter><Main /></BrowserRouter>);
    //const reservationButton = screen.getByRole('button', { name: 'Reserve a Table' });
    //fireEvent.click(reservationButton);
    const initialTimeSlots = screen.getByLabelText(/Choose time/, { exact: false });
    const todayTimeSlots = fetchAPI(new Date());
    expect(extractTimeSlots(initialTimeSlots.options)).toEqual(todayTimeSlots);
  })


  test('changing date changes available time slots', () => {
    render(<BrowserRouter><Main /></BrowserRouter>);
    //const reservationButton = screen.getByRole('button', { name: 'Reserve a Table' });
    //fireEvent.click(reservationButton);
    //const todayDate = screen.getByLabelText(/Choose date/, { exact: false });
    const todayTimeSlots = screen.getByLabelText(/Choose time/, { exact: false });
    fireEvent.change(screen.getByLabelText(/Choose date/, { exact: false }), { target: { value: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString() } })
    const tomorrowTimeSlots = screen.getByLabelText(/Choose time/, { exact: false });
    console.log(extractTimeSlots(tomorrowTimeSlots.options));
    expect(extractTimeSlots(todayTimeSlots.options)).not.toEqual(extractTimeSlots(tomorrowTimeSlots.options));
  })

  // test("Booking Form can be submitted", () => {
  //   const handleSubmit = jest.fn();
  //   render(<BrowserRouter><BookingForm onSubmit={handleSubmit} /></BrowserRouter>);
  //   const submitButton = screen.getByRole("button", { name: /Make a Reservation/ });
  //   fireEvent.click(submitButton);
  //   expect(handleSubmit).toBeCalled();
  // })

  // test("test for writing to local storage", () => {

  // })

  // test("test for reading from local Storage", () => {

  // })

  // test("valid date", () => {

  // })

  // test("invalid date", () => {

  // })

  // test("valid guests", () => {

  // })

  // test("invalid guests", () => {

  // })

});