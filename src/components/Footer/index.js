import React from 'react';
import './styles.scss';


export default class Footer extends React.Component{

render(){
  return (
   <footer className="Footer">
      <div className="Footer-information">
        <div className="Footer-logo">
          <a href="http://www.activeminds.org/" target="_blank">
          <img src="images/logo-footer.png"/>www.activeminds.org</a>
          <h4>Speaker’s Bureau is an Active Mind’s program<br />
          visit the Active Mind’s website to learn more.</h4>
        </div>

        <div className="Footer-contact">
          <h5>ACTIVE MINDS SPEAKERS BUREAU</h5>
          <h6>Contact us for booking information, available programs, and pricing.</h6>
          <div className="Footer-mail">
            <a href="mailto:speakers@activeminds.org"><img src="images/mail.png"/>
            <h2>speakers@activeminds.org</h2></a>
          </div>
          <div className="Footer-tel">
            <a href="tel:2023329595"><img src="images/tel.png"/>
            <h3>202.332.9595 ext. 102</h3></a>
          </div>
        </div>

        <div className="Footer-social">
          <a className="Footer-facebook" href="https://www.facebook.com/activemindsinc?ref=ts" target="_blank">
            <img src="images/facebook.png"/>
          </a>
          <a className="Footer-twitter" href="https://twitter.com/active_minds" target="_blank">
            <img src="images/twitter.png"/>
          </a>
          <a className="Footer-ins" href="https://www.instagram.com/active_minds/" target="_blank">
            <img src="images/ins.png"/>
          </a>
            <h1>Find us on social media!</h1>
        </div>
      </div>
    </footer>
   );

  }

}
