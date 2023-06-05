import React, { Component } from 'react'
import hamburger from '../assets/hamburger.svg'

export class Navigation extends Component {
  render() {
    return (
      <>
        <nav className="  w-screen flex flex-row justify-between p-2">
          <ul className="hidden">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="/reservations">Reservations</a>
            </li>
            <li>
              <a href="/order-Online">Order Online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
          <span class="material-symbols-outlined text-Green text-5xl">
            menu
          </span>

          <span class="material-symbols-outlined text-Green text-5xl ">
            shopping_basket
          </span>
        </nav>
      </>
    )
  }
}

export default Navigation
