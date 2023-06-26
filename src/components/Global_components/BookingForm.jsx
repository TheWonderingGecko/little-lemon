import { useNavigate } from 'react-router-dom'
import Button from '../Global_components/Button'
import { useState, useEffect } from 'react'

const BookingForm = (props) => {
  const Navigate = useNavigate()

  const [date, setDate] = useState(convertDateFormat(props.date))

  const [guests, setGuests] = useState(1)
  const [occasion, setOccasion] = useState('Birthday')

  const SubmitForm = (e) => {
    e.preventDefault()
    if (date === '') {
      alert('Please choose a date')
      return
    }
    const formData = {
      date,
      time: props.initalTime,
      guests,
      occasion,
    }
    props.submit(formData)
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
      className="flex flex-col w-1/2 gap-4 py-4 font-extrabold font-Karla-extraBold "
      onSubmit={SubmitForm}
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
        placeholder="YYYY-MM-DD"
        onChange={(e) => {
          setDate(e.target.value)
          props.updateTimes(e.target.value)
          console.log('change')
        }}
        className="p-2 border-4 rounded-md border-Green"
      />
      <label
        htmlFor="res-time"
        className=" text-2xl font-bold  after:content-['*'] after:ml-0.5 after:text-red-500"
      >
        Choose time
      </label>
      <select
        id="res-time "
        value={props.initalTime}
        onChange={(e) => props.changeTime(e.target.value)}
        className="p-2 bg-white border-4 rounded-md border-Green"
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
        className="p-2 text-black border-4 rounded-md border-Green"
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
        className="p-2 bg-white border-4 rounded-md border-Green"
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <Button title="Make Your reservation" type="submit" />
    </form>
  )
}
export default BookingForm
