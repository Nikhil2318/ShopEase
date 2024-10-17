import "./Contact.css";
function Contact() {
  return (
    <>
      <div className="contact">
        <div className="contact-details">
          <div className="contact-img">
            <img src="./icons/icons-phone.png" alt="phone_icon" />
            <h2>Call To Us</h2>
          </div>
          <p>We are avaialbale 24-7, 7days a week.</p>
          <p>Phone: +1 123-456-7890</p>
          <hr />
          <div className="contact-details no-shadow">
            <div className="contact-img">
              <img src="./icons/icons-mail.png" alt="" />
              <h2>Write To Us</h2>
            </div>
            <p>Fill out our form and we will contact you within hours</p>
            <p>Emails: customer@shopEase.com</p>
            <p>Emails: support@shopEase.com</p>
          </div>
        </div>

        <div className="contact-details">
          <div className="contact-img">
            <img src="./icons/icons-phone.png" alt="location_icon" />
            <h2>Visit Us</h2>
          </div>
          <p>Come visit us at our headquarters.</p>
          <p>Address: 123 ShopEase St, New York, NY 10001</p>
          <hr />
          <div className="contact-details no-shadow">
            <div className="contact-img">
              <img src="./icons/icons-mail.png" alt="hours_icon" />
              <h2>Business Hours</h2>
            </div>
            <p>Our team is available to help you during business hours.</p>
            <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
            <p>Sat - Sun: 10:00 AM - 4:00 PM</p>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <div className="contact-fields">
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input
                type="text"
                placeholder="Your Phone"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div>
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
