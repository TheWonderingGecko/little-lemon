import Button from '../Global_components/Button'
import { useState, useEffect } from 'react'

const BookingForm = (props) => {
  const [date, setDate] = useState(convertDateFormat(props.date))
  const [time, setTime] = useState('')

  const [guests, setGuests] = useState('')
  const [occasion, setOccasion] = useState('')

  const Test = () => {
    console.log(date, time, guests, occasion)
  }

  function convertDateFormat(dateString) {
    const parts = dateString.toLocaleDateString().split('/')
    if (parts.length === 3) {
      const [month, day, year] = parts
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    }
    return ''
  }
  return (
    <form
      className="flex flex-col gap-4 w-1/2 py-4 font-Karla-extraBold font-extrabold "
      onSubmit={Test}
    >
      <label
        htmlFor="res-date"
        className=" text-2xl font-bold  after:content-['*'] after:ml-0.5 after:text-red-500"
      >
        Choose date:
      </label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value)
          props.updateTimes(date)
        }}
        className="p-2 rounded-md  border-Green border-4"
      />
      <label
        htmlFor="res-time"
        className=" text-2xl font-bold  after:content-['*'] after:ml-0.5 after:text-red-500"
      >
        Choose time
      </label>
      <select
        id="res-time "
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="p-2 rounded-md  border-Green border-4 bg-white"
      >
        {props.availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      <label
        htmlFor="guests"
        className=" text-2xl font-bold  after:content-['*'] after:ml-0.5 after:text-red-500"
      >
        Number of guests
      </label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        className="p-2 rounded-md  border-Green border-4 text-black"
      />
      <label
        htmlFor="occasion"
        className=" text-2xl font-bold  after:content-['*'] after:ml-0.5 after:text-red-500"
      >
        Occasion
      </label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        className="p-2 rounded-md  border-Green border-4 bg-white"
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <button type="submit"> Make Your reservation</button>
      <Button title="Make Your reservation" />
    </form>
  )
}
export default BookingForm
