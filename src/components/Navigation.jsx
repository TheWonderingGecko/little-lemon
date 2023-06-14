import React, { Component } from 'react'
import hamburger from '../assets/hamburger.svg'
import { Link } from 'react-router-dom'

export class Navigation extends Component {
  render() {
    return (
      <>
        <nav className="  w-screen flex flex-row justify-between p-2 lg:p-0 xl:w-fit">
          <ul className="hidden lg:flex font-Karla-medium font-medium text-section_title gap-2 justify-center items-center w-fit xl:gap-20 ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="">
              <a href="#about-2">About</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <Link to="/reservations">Reservations</Link>
            </li>
            <li>
              <a href="/order-Online">Order Online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
          <span className="material-symbols-outlined text-Green text-5xl lg:hidden">
            menu
          </span>

          <span className="material-symbols-outlined text-Green text-5xl lg:hidden ">
            shopping_basket
          </span>
        </nav>
      </>
    )
  }
}

export default Navigation
