import './styles.scss'
import React from 'react'
class Skills extends React.Component {
    render() {
        const {skills} = this.props
        return (
          <article id="skills" className="content-container blocks-container">
              <h2>Compétences</h2>
              <SkillSet type="language" title="Langues" skills={skills}/>
              <SkillSet type="itlanguage" title="Langages de programmation" skills={skills}/>
              <SkillSet type="conventions" title="Normes" skills={skills}/>
              <SkillSet type="front" title="Front" skills={skills}/>
              <SkillSet type="back" title="Back" skills={skills}/>
              <SkillSet type="db" title="Bases de données" skills={skills}/>
              <SkillSet type="ope" title="Opérations" skills={skills}/>
          </article>
        )
    }
}

class SkillSet extends React.Component{
    render() {
        const {type , title, skills} = this.props
        const selectedskills = skills.filter(s => s.type === type)
        return (
          <div className="content-elt block">
              <h3 className="title">{title}</h3>
              <ul className={type + ' no-margin'}>
                  {
                      selectedskills.map((skill, idx) =>
                        <li className="no-margin no-bullet" key={idx} id={skill.id}>{skill.name} {skill.comment ? " : " + skill.comment : ""}</li>
                      )
                  }
              </ul>
          </div>
        )
    }
}


export default Skills
