const Button = (props) => {
  return (
    <button
      role="button"
      className="bg-Yellow px-4 py-2 rounded-2xl  font-Karla-bold text-paragraph font-bold "
    >
      {props.title}
    </button>
  )
}
export default Button
