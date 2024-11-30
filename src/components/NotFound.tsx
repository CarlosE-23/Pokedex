import { useNavigate } from "react-router-dom";
import "./NotFound.style.css";

function NotFound() {
  const navigator = useNavigate();

  const handleAction = () => navigator("/");

  return (
    <div className="not-found">
      <p>
        <span>Error 404: Rute Not Found</span>
        <span onClick={handleAction}>Back To Start</span>
      </p>
    </div>
  );
}

export default NotFound;
