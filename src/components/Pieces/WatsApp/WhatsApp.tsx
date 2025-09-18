import './WhatsApp.scss';
import { FaWhatsapp } from 'react-icons/fa6'

const WhatsApp = () => {
    const phoneNumber = "05321797155"
  return (
    <div className="whatsapp">
        <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer" aria-label='Watsapp'> <FaWhatsapp /> </a>
    </div>
  )
}

export default WhatsApp