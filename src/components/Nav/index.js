import React from 'react';
import 'components/Button';
import './styles.scss';


export default class Nav extends React.Component{

render(){
  return (
    <header className="Nav">
      <a href="http://active.convio.net/site/Survey?SURVEY_ID=1141&ACTION_REQUIRED=URI_ACTION_USER_REQUESTS" target="_blank">
      <img src="images/logo.png" /></a>
      <a className="Button" href="http://www.activeminds.org/our-programming/active-minds-speakers-bureau/book-a-speaker" target="_blank">Book Now</a>
    </header>
   );
  }
}
