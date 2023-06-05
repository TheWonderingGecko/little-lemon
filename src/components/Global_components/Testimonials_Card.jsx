import Image from '../../assets/Testomonial_1.jpeg'

const Testimonials_Card = () => {
  return (
    <div className=" flex flex-col rounded-md flex-shrink-0 gap-2 items-start justify-center w-[200px] h-44 bg-White p-2">
      <span className=" font-Karla-bold text-[14px] font-bold text-Dark_Orange">
        5/5
      </span>
      <div className="flex gap-2   ">
        <img
          src={Image}
          alt=""
          width="75px"
          className=" rounded-md shadow-md shadow-Black "
        />
        <p className=" font-Karla-bold text-[14px] font-bold">Jonathan Myers</p>
      </div>
      <p className=" font-Karla-regular text-[14px] text-Green">
        {' '}
        The Food was incredible and the oweners have so much Energy!!
      </p>
    </div>
  )
}
export default Testimonials_Card
