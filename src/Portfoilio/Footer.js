import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <a href="#" target="new">
        <div className="contact"> </div>
      </a>
      <a href="https://mail.google.com/mail/u/0/#inbox" target="new">
        <div className="gmail"> </div>
      </a>

      <a href="https://www.linkedin.com/feed/" target="new">
        <div className="linkdin"> </div>
      </a>
      <a
        href="https://www.google.com/maps/place/Promise+Academy%7C+BCA+Coaching+%7C+Diploma+Coaching+%7C+Degree+Engineering+Coaching%7C+Final+Year+Project+Training/@23.0573982,72.5467965,17z/data=!3m1!4b1!4m6!3m5!1s0x395e8585f9955ead:0xabe3c468cb63bd0!8m2!3d23.0573933!4d72.5493714!16s%2Fg%2F11q938fknl?entry=ttu"
        target="new"
      >
        <div className="map"> </div>
      </a>
    </div>
  );
}

export default Footer;
