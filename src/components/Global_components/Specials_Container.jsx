import Specials_Card from './Specials_Card'
import { specials } from '../../Mock_data/specials'

const Specials_Container = () => {
  return (
    <div className="w-full pt-4">
      {specials.map((special) => (
        <Specials_Card key={special.id} special={special} />
      ))}
    </div>
  )
}
export default Specials_Container
