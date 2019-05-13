import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Profile</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 <ul>
                   <li>
                   <strong>Consistently</strong> strives to acquire new skills and information.
                   </li>
                   <li>
                   <strong>Expansive leadership skills</strong> through management, motivation and set a precedent for strong work ethic.
                   </li>
                   <li>
                   <strong>Versatile</strong> and able to easily adapt to new situations.
                   </li>
                   <li>
                   <strong>Perseverance</strong> acquired through relentless determination and positive attitude.
                   </li>
                   <li>
                   <strong>Effective communication</strong> and team collaboration skills.
                   </li>
                   <li>
                   <strong>Analyzed, organized and produced</strong> numerous in-depth business plans for various types of businesses.
                   </li>



                   




                 </ul>
               </div>
            </div>
         </div>
      </div>

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Technologies</span></h1>
         </div>

         <div className="nine columns main-col">
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>React-Redux</li>
            <li>Sagas</li>
            <li>Material-UI</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>CSS</li>
            <li>GitHub</li>
            <li>Git</li>
            <li>jQuery</li>
            <li>Express</li>
            <li>PostGres</li>
            <li>APIs</li>
            <li>Passport</li>
            <li>HTML</li>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
