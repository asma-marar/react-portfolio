import '../index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';



function Footer(){

    return(
        <footer className="last">
  <div>
    <p>Living, learning, &amp; leveling up one day at a time.</p>
  </div>
  <br />
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap"
    }}
  >
    <a
      className="contact"
      href="https://www.facebook.com/profile.php?id=100007193777015"
      target="_blank"
      rel="noopener noreferrer"

    >
      <i className="fa-brands fa-facebook-f" />
    </a>
    <a
      className="contact"
      href="https://www.linkedin.com/in/asma-marar-5a3aba197/"
      target="_blank"
      rel="noopener noreferrer"

    >
      <i className="fa-brands fa-linkedin-in" />
    </a>
    <a className="contact" href="mailto:asma.mararr@gmail.com">
      <i className="fa-regular fa-envelope" target="_blank" />
    </a>
    
  </div>
</footer>

    );

}
export default Footer