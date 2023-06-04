const Button = (props) => {
  return (
    <button
      role="button"
      className="bg-Yellow px-4 py-2 rounded-md  font-Karla-bold text-paragraph font-bold w-fit "
    >
      {props.title}
    </button>
  )
}
export default Button
