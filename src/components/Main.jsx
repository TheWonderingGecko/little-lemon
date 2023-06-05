import React, { Component } from 'react'
import Button from './Global_components/Button'
import Specials_Container from './Global_components/Specials_Container'
import Testimonials_Container from './Global_components/Testimonials_Container'

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
      </main>
    )
  }
}

export default Main
