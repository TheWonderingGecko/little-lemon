import Button from './Button'

const Hero_title = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-start px-4 pb-10  gap-4 md:gap-8">
        <h1 className="text-title text-Yellow font-Markazi-medium  font-medium flex flex-col gap-1 md:gap-6">
          <span className=" h-16">Little Lemon </span>
          <span className=" h-10 text-White text-sub_title font-normal">
            Chicago
          </span>
        </h1>
        <p className="text-White text-medium font-Karla-medium font-medium w-60 xl:w-fit">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Button title="Reserve a table" link="/reservations" />
      </div>
    </>
  )
}
export default Hero_title
