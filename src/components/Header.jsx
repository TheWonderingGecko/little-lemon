import React, { Component } from 'react'
import logo from '../assets/Logo.svg'

export class Header extends Component {
  render() {
    return (
      <header className="hidden md:block">
        <img src={logo} alt="" />
      </header>
    )
  }
}

export default Header
