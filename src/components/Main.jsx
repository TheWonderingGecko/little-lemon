import React, { Component } from 'react'
import Hero_title from './Global_components/Hero_title'
import Button from './Global_components/Button'
import Specials_Container from './Global_components/Specials_Container'
import Testimonials_Container from './Global_components/Testimonials_Container'
import about_img from '../assets/MA_A.jpg'
import restaurant from '../assets/restaurant.jpg'
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

        <section
          className=" lg:hidden flex flex-col items-center justify-center px-4  py-4 "
          id="about"
        >
          <h2 className="text-title text-Green font-Markazi-medium  font-medium flex flex-col gap-1">
            <span className=" h-16">Little Lemon </span>
            <span className=" h-10 text-Dark_Orange text-sub_title font-normal">
              Chicago
            </span>
          </h2>
          <img
            src={about_img}
            alt=""
            width="272"
            className=" rounded-md shadow-md shadow-Black my-3 "
          />
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

        <section
          className=" hidden w-full  lg:flex  items-center justify-between px-60  py-20  h-full lg:relative gap-8"
          id="about-2"
        >
          <div className="w-[370px] basis-1/2">
            <h2 className="text-title text-Green font-Markazi-medium  font-medium flex flex-col gap-1">
              <span className=" h-16">Little Lemon </span>
              <span className=" h-10 text-Dark_Orange text-sub_title font-normal">
                Chicago
              </span>
            </h2>

            <p className="text-Black text-medium font-Karla-bold font-bold xl:w-1/2">
              Little Lemon is owned by two Italian brothers, Mario and Adrian,
              who moved to the United States to pursue their shared dream of
              owning a restaurant. To craft the menu, Mario relies on family
              recipes and his experience as a chef in Italy. Adrian does all the
              marketing for the restaurant and led the effort to expand the menu
              beyond classic Italian to incorporate additional cuisines from the
              Mediterranean region.
            </p>
          </div>

          <div className="flex flex-col basis-1/2 ">
            <img
              className=" absolute z-10 top-[5%] right-[18%] object-cover w-[276px] h-[338px] shadow-md  border  border-black xl:right-[25%] "
              src={about_img}
              alt="Image 1"
            />

            <img
              className=" absolute  bottom-[5%] object-cover w-[276px] h-[338px] shadow-md  border  border-black"
              src={restaurant}
              alt="Image 2"
            />
          </div>
        </section>
      </main>
    )
  }
}

export default Main
