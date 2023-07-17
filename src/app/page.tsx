import { ContactIcon, FormIcon, InstagramIcon } from "@/Icons";
import FollowMouse from "@/components/FollowMouse";

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
  const phoneNumber: Number = 9780460081;

  function formatPhoneNumber(phoneNo: Number): String {
    const stringPhoneNo = phoneNo.toString();
    const splitPhoneNo = [stringPhoneNo.slice(0, 4), stringPhoneNo.slice(5, stringPhoneNo.length)].join("-");
    return splitPhoneNo;
  }

  return <div className="hero-bottom">
    <div className="container">
      <div className="contact-info">
        <div className="pn-container">
          <div className="info-header">
            <div className="icon">
              <ContactIcon />

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
                <FormIcon />

              {/* <object style={{
                marginTop: -4,
              }} type="image/svg+xml" data="/form-icon.svg"
              ></object> */}
            </div>
            <h2>Fill the From</h2>
          </div>
          <div className="info">
            <div className="link">
              <a target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfLl-xhJ-2-YZ8zRByZPsae_6jldLKct_suJNIjKBgwNFZwsA/viewform">
                Google Form
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="sm-links">
      {/* <a title="facebook" href=""><object type="image/svg+xml" data="./assets/fb-logo.svg" alt="facebook">
                </object></a> */}
      <a title="instagram" href="https://www.instagram.com/gurdeepsingh_003/" target="_blank">
        {/* <object
        type="image/svg+xml" data="./assets/insta-logo.svg" alt="instagram"></object>  */}
        <InstagramIcon />
      </a>
      {/* <a title="twitter" href=""><object type="image/svg+xml" data="./assets/twitter-logo.svg" alt="twitter">
                </object></a>
            <a title="youtube" href=""><object type="image/svg+xml" data="./assets/yt-logo.svg" alt="youtube">
                </object></a>  */}
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






