import '../index.css'


function Skills(){

    return(
<section className="se">
  <div className="inside soft-skills">
    <p className="card-title">Soft Skills</p>
    <ul className="card-content">
      <li>Quick learner and willing to learn new concepts in short time.</li>
      <li>Delivering presentations.</li>
      <li>Team Collaboration.</li>
      <li>Time Management.</li>
      <li>Attention to Detail.</li>
      <li>Problem-Solving Ability.</li>
    </ul>
  </div>
  <div className="inside technical-skills">
    <p className="card-title">Technical Skills</p>
    <ul className="card-content">
      <li><strong>Front-End:</strong> HTML5, CSS3, Bootstrap, JavaScript, React JS.</li>
      <li><strong>Back-End:</strong> PHP, Laravel.</li>
      <li><strong>Database:</strong> MySQL.</li>
      <li><strong>Operating Systems:</strong> Windows.</li>
      <li><strong>SDLC Practices:</strong> Agile, Product Owner.</li>
      <li><strong>Tools:</strong> Visual Studio Code, Figma, Trello, GitHub.</li>
    </ul>
  </div>
</section>

      
    );

}
export default Skills