import salad from '../../assets/salad.jpg'
import { specials } from '../../Mock_data/specials'

const Specials_Card = (props) => {
  return (
    <div
      className="p-4 flex lg:flex-col-reverse items-center justify-between border-b-2 first:border-t-2 gap-2 border-White w-full lg:p-0 lg:gap-4  lg:border-0 lg:first:border-t-0  lg:bg-White "
      key={props.key}
    >
      <div className=" flex flex-col gap-2  p-2 lg:h-full   ">
        <div>
          <h3 className="text-Black text-card_title font-Karla-bold font-bold">
            {props.special.title}
          </h3>
          <span className="hidden lg:block text-Dark_Orange text-medium font-Karla-medium font-medium ">
            $ {props.special.price}
          </span>
        </div>
        <details className="text-Green text-paragraph font-Karla-regular font-normal lg:hidden">
          <summary className="hover:cursor-pointer">More Details</summary>
          <p className="text-Green text-paragraph font-Karla-regular font-normal ">
            {props.special.description}
          </p>
        </details>
        <p className="text-Green text-paragraph font-Karla-regular font-normal hidden lg:flex flex-col gap-3 lg:h-full   ">
          {props.special.description}
          <div className=" h-full flex justify-start items-end gap-2 text-Black font-bold">
            <span>Order a delivery</span>
            <span class="material-symbols-outlined">local_shipping</span>
          </div>
        </p>
        <span className="text-Dark_Orange text-medium font-Karla-medium font-medium lg:hidden">
          $ {props.special.price}
        </span>
      </div>
      <img
        src={props.special.image}
        alt=""
        className=" rounded-md shadow-md shadow-Black w-[125px] lg:w-[264px]  lg:h-[185px] flex-shrink-0  xl:w-full xl:h-[264px] object-cover object-center "
      />
    </div>
  )
}
export default Specials_Card
