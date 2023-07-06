import React, { Component } from 'react'
import hamburger from '../assets/hamburger.svg'
import { Link } from 'react-router-dom'

export class Navigation extends Component {
  render() {
    return (
      <nav className="flex flex-row justify-between w-screen p-2  lg:p-0 xl:w-fit">
        <ul className="items-center justify-center hidden gap-2 font-medium lg:flex font-Karla-medium text-section_title w-fit xl:gap-20 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="">
            <a href="">About</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
          <li>
            <a href="">Order Online</a>
          </li>
          <li>
            <a href="">Login</a>
          </li>
        </ul>
        <span className="text-5xl material-symbols-outlined text-Green lg:hidden">
          menu
        </span>

        <span className="text-5xl material-symbols-outlined text-Green lg:hidden ">
          shopping_basket
        </span>
      </nav>
    )
  }
}

export default Navigation
