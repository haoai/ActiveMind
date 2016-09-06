import React,{Component} from 'react';
import './styles.scss';
import Speaker from 'components/Speaker';
import 'components/layout/ContentBlock';
import 'components/layout/Grid';
import speakerList from '../../SpeakerList.json';

export default class SpeakerList extends Component {

  componentDidMount() {
    console.log(console.log(speakerList))
  }

  renderSpeakers(speakerList) {
  return speakerList.map((speaker, index) => {
      return (
        <Speaker
          key={index}
          type={speaker.type}
          name={speaker.name}
          bio={speaker.bio}
          link={speaker.link}
          image={speaker.image}/>
      )
    }
  )
  }


  render()
  {

    return (
      <section className="SpeakerList">
        <div className="ContentBlock">
          <div className="Grid">
           {this.renderSpeakers(speakerList.list)}
         </div>
        </div>
      </section>
    )
  }
}
