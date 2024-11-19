import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import './contact.css'

const Contact = () => {
  return (
        <div className="contact__container">
            <div className="contact__details">
                <div className="icon__wrapper">
                    <FaPhone className="icon"/>
                </div>
                <div className="text">
                   <p> Phone1 : 454848488888 </p>
                    <p>Phone2 : 454848488888 </p>
            </div>
            </div>
           
            <div className="contact__details">
                <div className="icon__wrapper">
                    <FaLocationDot className="icon"/>
                </div> 
                <div className="address">
                    <p>Address :  9R3F+45, 123, Oyinloye Olawale Street, Aba Bashorun Rd, Elebu, Ibadan 200131</p>
              </div> 
            </div>
            
            <div className="contact__details">
                <div className="icon__wrapper">
                <MdEmail className="icon"/>
                </div>
                <div className="text">
                    <p>Email: icastshools@gmail.com</p>
                    <p>Email: icastshools@gmail.com</p>
                </div>  
            </div>
           
        </div>
 
  )
}

export default Contact