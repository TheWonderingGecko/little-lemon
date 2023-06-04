import React, { Component } from 'react'
import logo from '../assets/Logo.svg'

export class Footer extends Component {
  render() {
    return (
      <footer>
        <section>
          <figure>
            <img src={logo} alt="Little lemon logo Logo" />
            <figcaption>Little lemon</figcaption>
          </figure>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/menu">Menu</a>
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
          <h2>Contact</h2>
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
          <h2>Resources</h2>
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
