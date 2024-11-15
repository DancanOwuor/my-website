import React, {useState}from "react";
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


function Contact(){
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "0f606fef-b01e-4d81-af97-b40cb9da6c4a");
    try{
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res)=>res.json());
  
  
      if (res.success) {
        console.log('Success',res);
        setResult("Email sent Successfully");
        event.target.reset();
      } else {
        console.log("Error", res);
        setResult(res.message || "An error occured while sending");
      }
    }
    catch(error){
        console.log("Submission error:");
        setResult("An error occured. Please try again Later");
    }
};


    return(
        <div className="contact">
            <div className="contact-col">
                <h3>Send Us a Message <img src={msg_icon} alt="" /></h3>
                <p>Feel free to reach out through contact form or find
                   Our contact information below. Your feedback, questions,
                   and suggestions are important to us as we strive to provide 
                   exceptional service to our university community.
                </p>
                <ul>
                    <li><img src={mail_icon} alt="" /> Contact@Dantech.dev</li>
                    <li><img src={phone_icon} alt="" /> +254 713448092</li>
                    <li><img src={location_icon} alt="" /> 77 Thika road Ave, KCA<br/>Nairobi 00100, Kenya</li>

                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label htmlFor="">Your Name</label>
                    <input type="text" name="name" placeholder="Enter Your name" required/>
                    <label htmlFor="">Phone number</label>
                    <input type="tel" name="phone" placeholder="Enter phone number" required/>
                    <label htmlFor="">Write your message here</label>
                    <textarea  name="message"  rows='6' placeholder="Enter Your message" required></textarea>
                    <button className="btn dark-btn">Submit <img src={white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>

        </div>
    )

    
}
export default Contact