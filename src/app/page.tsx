import { ContactIcon, FormIcon, InstagramIcon } from "@/Icons";
import FollowMouse from "@/components/FollowMouse";
import { formatPhoneNumber } from "@/utils";

export default function Home() {
  return (
    <section>
      <HeroTop />
      <HeroBottom />
      <div className="noise-texture"></div>
      <FollowMouse />
      <div className="circle-background first"></div>
      <div className="circle-background second"></div>
    </section>
  )
}

function HeroBottom() {
  const phoneNumber: Number = 8557060081;
  const socialMediaLinks = [
    {
      name : "Instagram" ,
      link :  "https://www.instagram.com/gurdeepsingh_003/",
      Icon : () => <InstagramIcon />
    }
  ]

  return <div className="hero-bottom">
    <div className="container">
      <div className="contact-info">
        <div className="pn-container">
          <div className="info-header">
            <div className="icon">
              <ContactIcon fontSize="large" />

            </div>
            <h2>Contact Us</h2>
          </div>
          <div className="info">
           
            <a href={"tel:+" + phoneNumber}>
              <span>+91 {formatPhoneNumber(phoneNumber)}</span>
            </a>
           
          </div>
        </div>
        <div className="or-container">
          <div className="line"></div>
          <span>OR</span>
          <div className="line"></div>
        </div>
        <div className="form-container">
          <div className="info-header">
            <div className="icon">
                <FormIcon fontSize="large" />
            </div>
            <h2>Fill the Form</h2>
          </div>
          <div className="info">
              <a target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfLl-xhJ-2-YZ8zRByZPsae_6jldLKct_suJNIjKBgwNFZwsA/viewform">
                Google Form
              </a>
          </div>
        </div>
      </div>
    </div>
    <div className="sm-links">
      {
        socialMediaLinks.map(({name , link , Icon} , index) => (
          <a key={index} title={name} href={link} target="_blank">
          <Icon />
        </a>
        ))
      }
    </div>
  </div>
}

function HeroTop() {
  return <div className="hero-top">
    <div className="container">
      <div className="heading-container">
        <h1 className="heading-primary">Work</h1>
        <h1 className="heading-secondary">From</h1>
        <h1 className="heading-primary">Home</h1>
      </div>
      <div className="message-container">
        <span>Full Website coming soon </span>
      </div>
    </div>
  </div>
}






