import "./Footer.style.css";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Footer() {
  return (
    <footer>
      <p>
        <span>Pagina elavorada por Carlos Guanipa </span>
        <a href="https://github.com/CarlosE-23" target="_blank">
          <FaGithub size={15} className="social-icon" />
          <span>github.com/CarlosE-23</span>
        </a>
        <a href="mailto:carlosgunaipa23@gmail.com" target="_blank">
          <IoMdMail size={15} className="social-icon" />
          <span>carlosgunaipa23@gmail.com</span>
        </a>
      </p>
    </footer>
  );
}

export default Footer;
