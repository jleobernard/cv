import React from 'react';
import Cv from '../../data/cv.js'
import './styles.scss'

class Experiences extends React.Component {
    render() {
        const {experiences} = this.props
        return (
            <article className="content-container">
                <h2>Expériences professionnelles</h2>
                {
                    experiences.map((experience, idx) =>
                        <Experience key={idx} {...experience} />
                    )
                }
            </article>
        )
    }
}
class Experience extends React.Component {
    render() {
        const experience = this.props
        let company = Cv.companies[experience.company]
        return (
            <article className="content-elt with-dates">
                <h3>{company.name}</h3>
                <div className="subtitle">{experience.poste}</div>
                <div className="dates">De {experience.from} à {experience.to}</div>
                <img className="company-logo" src={"./assets/images/"+company.logo} />
                <div className="description">{experience.description}</div>
                <div className="description">
                    <h4>Tâches</h4>
                    <ul className="tasks">
                        {experience.tasks.map((task, taskidx) => (
                            <li className="task" key={taskidx}>
                                <div className="description">{task.description}</div>
                                <TaskSkillsList skills={task.skills} />
                            </li>
                        ))}
                    </ul>
                </div>
            </article>
        )
    }
}

class TaskSkillsList extends React.Component {
    render() {
        const skills = this.props.skills
        if(skills && skills.length > 0) {
            return (<ul className="task-skills inline-list">
                {
                    skills.map((taskskill, idxtaskskill) => {
                        let skill = Cv.skills.find(skill => skill.id === taskskill);
                        if(skill) {
                            return (<li className="task-skill badge" key={idxtaskskill}>{skill.name}</li>)
                        } else {
                            return ""
                        }
                    })
                }
            </ul>)
        } else {
            return ""
        }
    }
}

export default Experiences
