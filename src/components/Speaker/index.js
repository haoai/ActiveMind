import React,{Component,PropTypes} from 'react';
// import SpeakerList from 'components/SpeakerList';
import './styles.scss';



export default class Speaker extends Component {

  static propTypes ={
    name:PropTypes.string,
    bio:PropTypes.string,
    link:PropTypes.string,
    image:PropTypes.string,

  }



  render() {
    return (
      <a className="Speaker" href={this.props.link}>
        <div className="Speaker-photo" style={{backgroundImage:this.props.image}}></div>
        <div className="Speaker-details" >
          <div className="Speaker-name"><h3>{this.props.name}</h3></div>
          <p>{this.props.bio}</p>
          <img src="images/learnmorebutton.png"/>
        </div>
     </a>

    )
  }
}
