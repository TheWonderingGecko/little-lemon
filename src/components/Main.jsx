import React, { Component } from 'react'
import Hero_title from './Global_components/Hero_title'
import Button from './Global_components/Button'
import Specials_Container from './Global_components/Specials_Container'
import Testimonials_Container from './Global_components/Testimonials_Container'
import about_img from '../assets/MA_A.jpg'
import Hero_img from '../assets/restauranfood.jpg'

export class Main extends Component {
  render() {
    return (
      <main className=" w-full">
        <section className=" bg-Green flex md:px-60 md:gap-10">
          <Hero_title />
          <img
            className="hidden md:block h-[422px] w-[375px] object-cover object-center -mb-6 mt-6 rounded-2xl  flex-shrink-0 flex-grow-0"
            src={Hero_img}
            alt=""
          />
        </section>

        <section
          className=" flex flex-col items-center justify-center "
          id="menu"
        >
          <h2 className="text-sub_title text-Black font-Karla-extraBold  font-extrabold  w-3/4 text-center">
            This Weeks Specials!!
          </h2>
          <Button title="Online Menu" />
          <Specials_Container />
        </section>

        <section className="flex flex-col items-center justify-center bg-Green py-4  ">
          <h2 className="text-4xl text-Yellow font-Markazi-medium font-medium  w-3/4 text-center">
            Testimonials
          </h2>

          <Testimonials_Container />
        </section>

        <section
          className="flex flex-col items-center justify-center px-4  py-4 "
          id="about"
        >
          <h2 className="text-title text-Green font-Markazi-medium  font-medium flex flex-col gap-1">
            <span className=" h-16">Little Lemon </span>
            <span className=" h-10 text-Dark_Orange text-sub_title font-normal">
              Chicago
            </span>
            <img
              src={about_img}
              alt=""
              width="272"
              className=" rounded-md shadow-md shadow-Black my-3 "
            />
          </h2>
          <details className="text-Black text-medium font-Karla-bold font-bold ">
            <summary>About us</summary>
            <p>
              Little Lemon is owned by two Italian brothers, Mario and Adrian,
              who moved to the United States to pursue their shared dream of
              owning a restaurant. To craft the menu, Mario relies on family
              recipes and his experience as a chef in Italy. Adrian does all the
              marketing for the restaurant and led the effort to expand the menu
              beyond classic Italian to incorporate additional cuisines from the
              Mediterranean region.
            </p>
          </details>
        </section>
      </main>
    )
  }
}

export default Main
