import { useFormContext } from "react-hook-form";
import { Input } from "../../../components/Input";

import { useAuth } from "../../../context/Auth/AuthContext";
import { FormError } from "../../../components/FormError";
import { Button } from "../../../components/Button";

interface ErrorType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

interface AuthFormData {
  [key: string]: string;
}

export function SignInForm() {
  const { register, handleSubmit, formState, watch } = useFormContext();
  const { authenticateWithEmailAndPassword } = useAuth();

  const { errors } = formState as unknown as ErrorType;

  const { email, password } = watch();
  const isValidFields = !email || !password;

  const handleAuthenticate = async (data: AuthFormData) => {
    const { email, password } = data;

    const authenticateAfterThreeSeconds = new Promise((resolve) => {
      setTimeout(async () => {
        await authenticateWithEmailAndPassword({
          email,
          password,
        });

        resolve("");
      }, 3000);
    });

    await authenticateAfterThreeSeconds;
  };

  return (
    <div>
      <h2 className="z-[1] font-medium text-[32px] relative after:absolute after:h-5 after:w-5 after:bg-[#fb1] after:rounded-sm after:bottom-[10px] after:-left-[5px] after:block after:-z-[1]">
        Faça seu login
      </h2>

      <form className="mt-14" onSubmit={handleSubmit(handleAuthenticate)}>
        <div className={`mb-9`}>
          <div className={`flex flex-col gap-4`}>
            <label
              htmlFor="email"
              className={`text-xl font-bold text-black/80 sr-only`}
            >
              Login
            </label>

            <Input id="email" placeholder="Email" {...register("email")} />
          </div>

          <FormError error={errors.email?.message} />
        </div>

        <div>
          <div className={`flex flex-col gap-4`}>
            <label
              htmlFor="password"
              className={`text-xl font-bold text-black/80 sr-only`}
            >
              Senha
            </label>

            <Input
              type="password"
              id="password"
              placeholder="Senha"
              {...register("password")}
            />
          </div>

          <FormError error={errors.password?.message} />
        </div>

        <Button className="w-full mt-12" disabled={isValidFields}>
          entrar
        </Button>
      </form>
    </div>
  );
}
