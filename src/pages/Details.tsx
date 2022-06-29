import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { ArrowLeft, Users } from "phosphor-react";
import { Link } from "react-router-dom";
import { ItemList } from "../components/List/ItemList";
import peopleIcon from "../assets/people.svg";
import moneyIcon from "../assets/money.svg";

export function Details() {
  return (
    <div className="min-h-screen">
      <Header className="h-80 pt-[70px] bg-barbecue bg-yellow" />

      <main className={`-mt-28`}>
        <div className={`px-6`}>
          <div className="mb-6 flex items-center justify-between">
            <Link to="/dashboard">
              <Button className="flex items-center gap-2 text-sm hover:text-white hover:bg-black">
                <ArrowLeft size={24} />
                Voltar
              </Button>
            </Link>

            <Button
              type="button"
              className="flex items-center gap-2 bg-black text-white text-sm"
            >
              <Users size={24} />
              Adicionar membro
            </Button>
          </div>

          <div className="bg-white shadow-md p-6">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <span className="text-[28px] font-medium">01/12</span>
                <strong className="text-4xl">Niver do Gui</strong>
              </div>

              <div className="flex flex-col gap-4">
                <span className={`text-xl font-medium flex items-center gap-3`}>
                  <img src={peopleIcon} alt="people icon" />
                  20
                </span>
                <span className={`text-xl font-medium flex items-center gap-3`}>
                  <img src={moneyIcon} alt="money icon" />
                  R$200
                </span>
              </div>
            </div>

            <div className="mt-10">
              <div className="flex flex-col divide-y">
                <ItemList />
                <ItemList />
                <ItemList />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
