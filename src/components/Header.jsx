import React, { Component } from 'react'
import logo from '../assets/Logo.svg'

export class Header extends Component {
  render() {
    return (
      <header className="flex-shrink-0 hidden md:block  ">
        <img src={logo} alt="" width="194px" />
      </header>
    )
  }
}

export default Header
