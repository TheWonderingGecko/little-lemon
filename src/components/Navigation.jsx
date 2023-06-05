import React, { Component } from 'react'
import hamburger from '../assets/hamburger.svg'

export class Navigation extends Component {
  render() {
    return (
      <>
        <nav className="  w-screen flex flex-row justify-between p-2 md:p-0">
          <ul className="hidden md:flex font-Karla-medium font-medium text-section_title gap-2 justify-center items-center w-fit ">
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
          <span class="material-symbols-outlined text-Green text-5xl md:hidden">
            menu
          </span>

          <span class="material-symbols-outlined text-Green text-5xl md:hidden ">
            shopping_basket
          </span>
        </nav>
      </>
    )
  }
}

export default Navigation
