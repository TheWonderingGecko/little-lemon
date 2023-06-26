import BookingForm from '../components/Global_components/BookingForm'
import { useNavigate } from 'react-router-dom'

import { useEffect, useReducer, useState } from 'react'

const currentDate = new Date()

const seededRandom = function (seed) {
  var m = 2 ** 35 - 31
  var a = 185852
  var s = seed % m
  return function () {
    s = (s * a + seed) % m
    return s / m
  }
}

const fetchAPI = function (date) {
  let result = []
  let random = seededRandom(date.getTime())

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ':00')
    }
    if (random() < 0.5) {
      result.push(i + ':30')
    }
  }
  return result
}

const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.payload
    case 'INITIALIZE_TIMES':
      return action.payload
    default:
      return state
  }
}

const Booking = () => {
  const [availableTimes, dispatch] = useReducer(timesReducer, [])
  const Navigate = useNavigate()
  const [time, setTime] = useState('')
  const today = new Date()

  const submitAPI = function (formData) {
    console.log(formData)
    Navigate('/confirmed')

    return true
  }

  const updateTimes = (date) => {
    console.log(date)
    const today = new Date(date)
    console.log(today)

    const times = fetchAPI(today)

    dispatch({
      type: 'UPDATE_TIMES',
      payload: times,
    })
    console.log(times)
  }

  const initializeTimes = () => {
    try {
      const times = fetchAPI(currentDate)
      setTime(times[0])

      dispatch({
        type: 'INITIALIZE_TIMES',
        payload: times,
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    initializeTimes()
  }, [])

  return (
    <div className="flex items-center justify-center bg-White">
      <BookingForm
        availableTimes={availableTimes}
        initalTime={time}
        changeTime={setTime}
        submit={submitAPI}
        updateTimes={updateTimes}
        date={currentDate}
      />
    </div>
  )
}
export default Booking
