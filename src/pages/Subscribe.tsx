import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { TrincaLogo } from "../components/TrincaLogo";

export function Subscribe() {
  const [fieldEmailValue, setFieldEmailValue] = useState("");
  const [fieldNameValue, setFieldNameValue] = useState("");

  const navigate = useNavigate();

  function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    if (!fieldEmailValue.trim() || !fieldNameValue.trim()) {
      alert("Preencha os campos");
      return;
    }

    setFieldEmailValue("");
    setFieldNameValue("");

    navigate("/dashboard");
  }

  return (
    <div className={`min-h-screen bg-barbecue bg-yellow`}>
      <Header />

      <div
        className={`mt-16 w-screen max-w-xs mx-auto flex items-center 
        flex-col gap-32`}
      >
        <div className="w-full">
          <form onSubmit={handleSubscribe}>
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
                onChange={e => setFieldEmailValue(e.target.value)}
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
                onChange={e => setFieldNameValue(e.target.value)}
                className={`w-full h-[50px] rounded px-5 text-base border-2
                border-transparent focus:border-black outline-0 transition-all
                `}
              />
            </div>

            <button
              type="submit"
              className={`w-full h-[50px] mt-[74px] uppercase text-base bg-black 
              text-white font-bold rounded hover:bg-black/95 transition-colors
            `}
            >
              entrar
            </button>
          </form>
        </div>

        <footer>
          <TrincaLogo />
        </footer>
      </div>
    </div>
  );
}
