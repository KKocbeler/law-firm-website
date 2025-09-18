import "./Phone.scss";
import { BsFillTelephoneOutboundFill } from 'react-icons/bs'

const Phone = () => {
  return (
    <div className="phone">
        <div className="phone-icon">
            <BsFillTelephoneOutboundFill /> 
        </div>
        <a href="tel:+905321797155">(0532) 179 71 55</a>
    </div>
  )
}

export default Phone