import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { SignOut } from "phosphor-react";

export function Dashboard() {
  return (
    <div className={`min-h-screen overflow-x-hidden`}>
      <Header className={`pt-[70px] h-80 bg-barbecue bg-yellow`} />

      <main className={`-mt-28`}>
        <div className={`px-6`}>
          <div className="mb-6 flex items-center justify-end gap-3">
            <Button type="button" className="text-sm text-white bg-black">
              Adicionar Churras
            </Button>

            <Button
              type="button"
              className="text-sm flex items-center gap-2 hover:bg-red-600 hover:text-white hover:border-red-600"
            >
              <SignOut size={24} />
              sair
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </main>
    </div>
  );
}
