import Specials_Card from './Specials_Card'
import { specials } from '../../Mock_data/specials'

const Specials_Container = () => {
  return (
    <div className="w-full py-4">
      {specials.map((special) => (
        <Specials_Card key={special.id} special={special} />
      ))}
    </div>
  )
}
export default Specials_Container
