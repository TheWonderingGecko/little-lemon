import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Booking from '../../src/App'

import BookingForm from '../pages/Booking'

test('Renders the BookingForm heading', () => {
  render(<BookingForm />)
  const headingElement = screen.getByText('Choose date:')
  expect(headingElement).toBeInTheDocument()
})

test('times are initialized', () => {
  render(<BookingForm />)
  const bookingComponent = screen.getByRole('form')
  expect(bookingComponent).toBeInTheDocument()
  expect(bookingComponent.availableTimes).not.toBe([])
})

test('times are updated when date is changed', () => {
  render(<BookingForm />)
  const date = new Date()
  date.setDate(date.getDate() + 1)
  const bookingComponent = screen.getByRole('form')
  expect(bookingComponent).toBeInTheDocument()
  expect(bookingComponent.availableTimes).not.toBe([])
})
