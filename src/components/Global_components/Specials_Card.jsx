import salad from '../../assets/salad.jpg'
import { specials } from '../../Mock_data/specials'

const Specials_Card = (props) => {
  return (
    <div
      className="p-4 flex items-center justify-between border-b-2 first:border-t-2 gap-2 border-White  "
      key={props.key}
    >
      <div className=" flex flex-col gap-2  p-2">
        <h3 className="text-Black text-card_title font-Karla-bold font-bold">
          {props.special.title}
        </h3>
        <p className="text-Green text-paragraph font-Karla-regular font-normal h-16 overflow-scroll">
          {props.special.description}
        </p>
        <span className="text-Dark_Orange text-medium font-Karla-medium font-medium">
          $ {props.special.price}
        </span>
      </div>
      <img
        src={props.special.image}
        alt=""
        width="150px"
        className=" rounded-md shadow-md shadow-Black "
      />
    </div>
  )
}
export default Specials_Card
