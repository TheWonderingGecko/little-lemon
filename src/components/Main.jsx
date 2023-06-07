import React, { Component } from 'react'
import Hero_title from './Global_components/Hero_title'
import Button from './Global_components/Button'
import Specials_Container from './Global_components/Specials_Container'
import Testimonials_Container from './Global_components/Testimonials_Container'
import about_img from '../assets/MA_A.jpg'
import restaurant from '../assets/restaurant.jpg'
import About from './Global_components/About'
import Hero_img from '../assets/restauranfood.jpg'

export class Main extends Component {
  render() {
    return (
      <main className=" w-full">
        <section className=" bg-Green flex lg:px-60 lg:gap-10 md:items-center md:justify-center xl:px-0 xl:justify-evenly ">
          <Hero_title />
          <img
            className="hidden md:block md:w-[300px] md:h-[300px] lg:h-[422px] lg:w-[375px] object-cover object-center lg:-mb-6 lg:mt-6 rounded-2xl  flex-shrink-0 flex-grow-0 xl:-mb-12"
            src={Hero_img}
            alt=""
          />
        </section>

        <section
          className=" flex flex-col items-center justify-center lg:px-60 lg:py-20"
          id="menu"
        >
          <div className="flex flex-col items-center justify-between lg:flex-row lg:w-full  ">
            <h2 className="text-sub_title text-Black font-Karla-extraBold  font-extrabold  w-3/4 text-center lg:w-auto">
              This Weeks Specials!!
            </h2>
            <Button title="Online Menu" />
          </div>

          <Specials_Container />
        </section>

        <section className="flex flex-col items-center justify-center bg-Green py-4 lg:px-60 lg:py-20   ">
          <h2 className="text-4xl text-Yellow font-Markazi-medium font-medium  w-3/4 text-center">
            Testimonials
          </h2>

          <Testimonials_Container />
        </section>

        <About></About>
      </main>
    )
  }
}

export default Main
