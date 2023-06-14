import BookingForm from '../components/Global_components/BookingForm'

import { useEffect, useReducer } from 'react'

const currentDate = new Date()

const seededRandom = function (seed) {
  var m = 2 ** 35 - 31
  var a = 185852
  var s = seed % m
  return function () {
    return (s = (s * a) % m) / m
  }
}

const fetchAPI = function (date) {
  let result = []
  let random = seededRandom(date.getDate())

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
const submitAPI = function (formData) {
  return true
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
  const today = new Date()

  const updateTimes = (date) => {
    const updatedDate = Date(date)
    const times = fetchAPI(updatedDate)
    console.log(updatedDate)

    dispatch({
      type: 'UPDATE_TIMES',
      payload: times,
    })
  }

  const initializeTimes = () => {
    try {
      const times = fetchAPI(currentDate)

      console.log(currentDate)

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
    <div className="flex justify-center items-center bg-White">
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        date={currentDate}
      />
    </div>
  )
}
export default Booking
