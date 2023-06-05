import React, { Component } from 'react'
import logo from '../assets/Logo.svg'

export class Footer extends Component {
  render() {
    return (
      <footer className=" flex gap-3 font-Karla-medium text-section_title text-White bg-Green p-4 font-medium">
        <section>
          <h2 className="text-Yellow">Dormat Navigation</h2>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
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
