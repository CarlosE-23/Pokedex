import { IoMdExit } from "react-icons/io";
import "./ReturnBeginning.style.css";

function ReturnBeginning({ action }: { action: () => void }) {
  return (
    <div className="exit">
      <IoMdExit
        size={30}
        onClick={action}
        className="exit-btn"
        color="#bbe9fd"
      />
    </div>
  );
}

export default ReturnBeginning;
