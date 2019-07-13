import './styles.scss'
const Education = ({schools}) =>
<article id="formation" className="content-container">
    <h2>Formation et diplômes</h2>
    {
        schools.map((school, idx) =>
            <School key={idx} {...school} />
        )
    }
</article>

const School = ({name, type, diploma, from, to}) =>
<section className="content-elt with-dates">
    <div className="title">{name}</div>
    <div className="subtitle">{type}</div>
    <div className="dates">De {from} à {to}</div>
    <div className="description">{diploma}</div>
</section>


export default Education
