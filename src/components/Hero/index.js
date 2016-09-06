import React from 'react';
import './styles.scss';
import Slider from 'react-slick';

export default class Nav extends React.Component{

render() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    fade:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:5000,
  }
  return (
    <section className="Hero">
      <Slider {...settings}>
      {/*<a helf="https://github.com/akiran/react-slick"><img src="images/hero.png"/></a>*/}
          <img src="images/hero1.jpg"/>
          <img src="images/hero2.jpg"/>
          <img src="images/hero3.jpg"/>
        </Slider>
    </section>
   );

  }

}
