import Testimonials_Card from './Testimonials_Card'

const Testimonials_Container = () => {
  return (
    <div className="flex overflow-x-auto w-full gap-4 p-4 lg:px-0 xl:items-center xl:justify-center ">
      <Testimonials_Card />
      <Testimonials_Card />
      <Testimonials_Card />
      <Testimonials_Card />
    </div>
  )
}
export default Testimonials_Container
