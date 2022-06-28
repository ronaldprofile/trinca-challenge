import { useState } from "react";
import { Header } from "../components/Header";
import { TrincaLogo } from "../components/TrincaLogo";
import { ModalSignup } from "../components/ModalSignup";
import { Button } from "../components/Button";

export function Subscribe() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function closeModal() {
    setIsOpenModal(false);
  }

  function openModal() {
    setIsOpenModal(true);
  }

  return (
    <div className={`min-h-screen bg-barbecue bg-yellow`}>
      <Header className={`pt-[70px]`} title="Faça seu login" />

      <div
        className={`mt-16 w-screen max-w-xs mx-auto flex items-center 
        flex-col gap-16`}
      >
        <div className="w-full">
          <form>
            <div className={`mb-9 flex flex-col gap-4`}>
              <label
                htmlFor="email"
                className={`text-xl font-bold text-black/80 sr-only`}
              >
                Login
              </label>

              <input
                type="email"
                id="email"
                placeholder="Seu E-mail"
                className={`w-full h-[50px] rounded px-5 text-base
                border-2 border-transparent focus:border-black outline-0 transition-all
                `}
              />
            </div>

            <div className={`flex flex-col gap-4`}>
              <label
                htmlFor="password"
                className={`text-xl font-bold text-black/80 sr-only`}
              >
                Senha
              </label>

              <input
                type="password"
                id="password"
                placeholder="Sua senha"
                className={`w-full h-[50px] rounded px-5 text-base border-2
                border-transparent focus:border-black outline-0 transition-all
                `}
              />
            </div>

            <Button
              type="submit"
              className="w-full mt-12 bg-black/90 text-white"
            >
              entrar
            </Button>
          </form>

          <div className={`mt-6 flex flex-col gap-4`}>
            <div
              className={`flex items-center  before:h-[1px] before:flex-1
            before:bg-black before:mr-4 after:h-[1px] after:bg-black 
              after:flex-1 after:ml-4`}
            >
              ou
            </div>

            <Button
              type="button"
              onClick={openModal}
              className="border border-black hover:bg-black hover:text-white"
            >
              Criar minha conta
            </Button>
          </div>
        </div>

        <footer>
          <TrincaLogo />
        </footer>

        {isOpenModal && (
          <ModalSignup isOpen={isOpenModal} closeModal={closeModal} />
        )}
      </div>
    </div>
  );
}
