import { Link } from 'react-router-dom'

const Button = (props) => {
  return (
    <button
      role="button"
      type={props.type}
      className="bg-Yellow px-4 py-2 rounded-md  font-Karla-bold text-paragraph font-bold w-fit h-fit "
    >
      <Link to={props.link}>{props.title}</Link>
    </button>
  )
}
export default Button
