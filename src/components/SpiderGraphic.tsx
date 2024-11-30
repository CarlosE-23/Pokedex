import { useEffect, useRef } from "react";

type TProps = {
  baseStat: number;
  name: string;
};

function SpiderGraphic(props: TProps) {
  const { baseStat, name } = props;
  const refUl = useRef<HTMLUListElement>(null);

  const handleLoad = () => {
    if (!refUl.current) return;
    const elements = new Array(...refUl.current.querySelectorAll("li")).filter(
      (el) => {
        if (!el.dataset.number) return false;
        if (parseInt(el.dataset.number) <= baseStat) return true;
      }
    );
    elements.forEach((el) => el.classList.add("true"));
  };

  useEffect(handleLoad, []);

  return (
    <div className="stat">
      <h3 translate={name === "hp" ? "no" : "yes"}>{name}</h3>
      <ul ref={refUl}>
        <li data-number="100"></li>
        <li data-number="90"></li>
        <li data-number="80"></li>
        <li data-number="70"></li>
        <li data-number="60"></li>
        <li data-number="50"></li>
        <li data-number="40"></li>
        <li data-number="30"></li>
        <li data-number="20"></li>
        <li data-number="10"></li>
      </ul>
    </div>
  );
}

export default SpiderGraphic;
