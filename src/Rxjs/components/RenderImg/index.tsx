import _ from "lodash"
import './style.sass'

interface IProps {
  data: Array<{ src: string, label: string }>
}

const RenderImg = ({ data }: IProps) => {
  return <div className="wraper">
    {
      _.map(data, (item, idx) => (
        <div className="item" key={idx}>
          <img src={item.src} alt="" />
          <b>{item.label}</b>
        </div>
      ))
    }
  </div>
}

export default RenderImg