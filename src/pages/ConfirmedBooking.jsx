import hero_image from '/src/assets/lemon_dessert.jpg'
import logo from '/src/assets/Logo.svg'

const ConfirmedBooking = () => {
  return (
    <div className="h-full">
      <div className="relative flex flex-col items-center justify-center  bg-White h-[50vh]">
        <img src={hero_image} alt="" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <h1 className="font-bold text-center font-Karla-bold text-sub_title text-White ">
            Your <span className="underline text-Yellow ">reservation</span> is
            all set!
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 py-4 ">
        <p className="font-medium text-center text-sub_title font-Markazi-medium">
          You'll receive an email confirmation shortly!!
        </p>
        <a
          href="/"
          className="font-medium text-center text-blue-800 text-section_title font-Markazi-medium hover:underline"
        >
          return to home page
        </a>
        <img src={logo} alt="" className="object-cover " />
      </div>
    </div>
  )
}
export default ConfirmedBooking
