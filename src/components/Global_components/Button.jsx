import { Link } from 'react-router-dom'

const Button = (props) => {
  return (
    <button
      role="button"
      type={props.type}
      className="px-4 py-2 font-bold rounded-md bg-Yellow font-Karla-bold text-paragraph w-fit h-fit "
    >
      {props.link ? <Link to={props.link}>{props.title}</Link> : props.title}
    </button>
  )
}
export default Button
