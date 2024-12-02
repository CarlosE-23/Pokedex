import "./Loader.style.css";
import LoaderImg from "../assets/img/ajax-loader.gif";

function Loader() {
  return (
    <div className="loader">
      <img src={LoaderImg} alt="loader" />
    </div>
  );
}

export default Loader;
