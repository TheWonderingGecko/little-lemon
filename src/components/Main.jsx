import React, { Component } from 'react'
import Button from './Global_components/Button'
import Specials_Container from './Global_components/Specials_Container'
import Testimonials_Container from './Global_components/Testimonials_Container'
import about_img from '../assets/MA_A.jpg'

export class Main extends Component {
  render() {
    return (
      <main className=" w-full">
        <section className="flex flex-col justify-center items-start px-4 pb-10 bg-Green  gap-4">
          <h1 className="text-title text-Yellow font-Markazi-medium  font-medium flex flex-col gap-1">
            <span className=" h-16">Little Lemon </span>
            <span className=" h-10 text-White text-sub_title font-normal">
              Chicago
            </span>
          </h1>
          <p className="text-White text-medium font-Karla-medium font-medium w-60">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Button title="Reserve a table" />
        </section>
        <section className=" flex flex-col items-center justify-center ">
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

        <section className="flex flex-col items-start justify-center px-4  py-4 ">
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
          <details className="text-Black text-medium font-Karla-medium font-medium w-60">
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
