import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg'

export class Footer extends Component {
  render() {
    return (
      <footer className="flex gap-3 p-4 font-medium font-Karla-medium text-section_title text-White bg-Green lg:px-60 lg:justify-between">
        <img
          src={logo}
          alt=""
          className="hidden p-4 bg-white border-2 border-Black md:block"
        />

        <section>
          <h2 className="text-Yellow">Dormat Navigation</h2>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/"> Menu</a>
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
          </nav>
        </section>
        <section>
          <h2 className="text-Yellow">Contact</h2>
          <nav>
            <ul>
              <li>
                <a href="/Contact">Address</a>
              </li>
              <li>
                <a href="/phone-number">Phone number</a>
              </li>
              <li>
                <a href="/email">email</a>
              </li>
            </ul>
          </nav>
        </section>
        <section>
          <h2 className="text-Yellow">Resources</h2>
          <nav>
            <ul>
              <li>
                <a href="/Contact">Address</a>
              </li>
              <li>
                <a href="/phone-number">Phone number</a>
              </li>
              <li>
                <a href="/email">email</a>
              </li>
            </ul>
          </nav>
        </section>
      </footer>
    )
  }
}

export default Footer
