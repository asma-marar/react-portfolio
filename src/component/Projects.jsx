import '../index.css'
import bookifyImage from '../assets/images/bookify.png';
import waqtImage from '../assets/images/waqt.png';
import orangeImage from '../assets/images/orange.png';
import masterPieaceImage from '../assets/images/masterpieace.png';


function Projects(){

    const projects = [
        {
          title: 'Bookify',
          description: 'A collaborative project creating an online bookstore with advanced features.',
          img: bookifyImage,
          link: 'https://hamzaszaitoun.github.io/Bookify/',
        },
        {
          title: 'WAQT',
          description: 'An e-commerce website offering high-quality products with PHP and MySQL.',
          img: waqtImage,
          link: 'https://github.com/saja-massimi/waqt2',
        },
        {
          title: 'Orange Community',
          description: 'A Laravel and React project for community engagement with comments and likes.',
          img: orangeImage,
          link: 'https://github.com/asma-marar/Orang_Community_React_asma',
        },
        {
          title: 'Lumi Pick',
          description: 'A Laravel project for buying and selling products seamlessly. Unlike traditional platforms, sellers and buyers are the same user type—anyone can list items for sale or make purchases.',
          img: masterPieaceImage,
          link: 'https://github.com/asma-marar/masterpieace',
        },
      ];
    
      return (
        <section className="projects">
          <h2 className="section-title">My Projects</h2>
          <div className="project-cards">
            {projects.map((project, index) => (
              <div key={index} className="project-card" onClick={() => window.open(project.link, '_blank')}>
                <img src={project.img} alt={project.title} className="project-image" />
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      );
}
export default Projects