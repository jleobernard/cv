import React from 'react'
import ReactDOM from 'react-dom'
import Education from './components/education/education'
import Experiences from './components/expe/expe'
import Skills from './components/skills/skills'
import Cv from './data/cv'
import '../assets/styles/main.scss'

window.React = React
window.ReactDOM = ReactDOM

const MyCV = () =>
<div id="cv">
  <Education schools={Cv.schools} />
  <Experiences experiences={Cv.experiences} />
  <Skills skills={Cv.skills} />
</div>

ReactDOM.render(
<MyCV />,
document.getElementById("react-container")
)
