import '../styles/AboutCard.css'

function AboutCard(props) {
  return (
    <article className="about-card">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </article>
  );
}

export default AboutCard;