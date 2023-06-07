import restaurant from '../../assets/restaurant.jpg'
import about_img from '../../assets/MA_A.jpg'

export const About = () => {
  return (
    <>
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
            Little Lemon is owned by two Italian brothers, Mario and Adrian, who
            moved to the United States to pursue their shared dream of owning a
            restaurant. To craft the menu, Mario relies on family recipes and
            his experience as a chef in Italy. Adrian does all the marketing for
            the restaurant and led the effort to expand the menu beyond classic
            Italian to incorporate additional cuisines from the Mediterranean
            region.
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
            Little Lemon is owned by two Italian brothers, Mario and Adrian, who
            moved to the United States to pursue their shared dream of owning a
            restaurant. To craft the menu, Mario relies on family recipes and
            his experience as a chef in Italy. Adrian does all the marketing for
            the restaurant and led the effort to expand the menu beyond classic
            Italian to incorporate additional cuisines from the Mediterranean
            region.
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
    </>
  )
}

export default About
