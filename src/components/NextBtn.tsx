import "./NextBtn.style.css";
import { FaArrowRight } from "react-icons/fa";

function NextBtn({ action }: { action: () => void }) {
  return (
    <div className="next-btn">
      <p onClick={() => action()}>
        More results <FaArrowRight className="arrow" />
      </p>
    </div>
  );
}

export default NextBtn;
