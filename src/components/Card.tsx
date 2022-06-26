import { Link } from "react-router-dom";
import peopleIcon from "../assets/people.svg";
import moneyIcon from "../assets/money.svg";

export function Card() {
  return (
    <Link
      to={"#"}
      title="ver detalhes"
      className={`w-full p-6 bg-white text-black shadow-md rounded-sm
        border-2 border-transparent hover:-translate-y-1 transition-all
        hover:border-yellow ease-in
      `}
    >
      <div className={`flex flex-col gap-2`}>
        <span className={`font-bold text-[28px]`}>01/12</span>
        <span className={`font-bold text-xl text-black/80`}>
          Aniversário do Gui
        </span>
      </div>

      <div className={`mt-12 flex items-center justify-between`}>
        <span className={`text-xl font-medium flex items-center gap-3`}>
          <img src={peopleIcon} alt="people icon" />
          20
        </span>
        <span className={`text-xl font-medium flex items-center gap-3`}>
          <img src={moneyIcon} alt="money icon" />
          R$200
        </span>
      </div>
    </Link>
  );
}
