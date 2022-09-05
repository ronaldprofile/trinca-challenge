import { keyframes, styled } from "../../stitches.config";

const animationFade = keyframes({
  from: {
    transform: "translateY(-14px)",
    opacity: 0,
    visibility: "hidden",
  },

  to: {
    transform: "translateY(0)",
    opacity: 1,
    visibility: "visible",
  },
});

const InputError = styled("div", {
  paddingTop: 7,

  animation: `${animationFade} 800ms`,
  span: {
    fontSize: 12,
    color: "#d34242",
  },
});

interface FormErrorProps {
  error?: string;
}


export function FormError({ error }: FormErrorProps) {
  if (!error) {
    return <></>;
  }

  return (
    <InputError>
      <span>{error}</span>
    </InputError>
  );
}
