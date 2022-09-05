import { styled } from "../../stitches.config";

export const Input = styled("input", {
  height: 50,
  padding: "0 20px",
  fontSize: 16,
  transition: ".2s all",
  borderRadius: 4,

  variants: {
    shape: {
      primary: {
        background: "White",
        border: "1px solid transparent",

        "&:focus": {
          borderColor: "#fb1",
          outline: "none",
          boxShadow: "0 0 0 3px #fea",
        },

        "&:hover": {
          borderColor: "#fb1",
          boxShadow: "0 0 0 3px #fea",
        },
      },

      secondary: {
        background: "#E1FAEC",
        border: "1px solid #d1d5db",

        "&:focus": {
          outline: "none",
        },
      },
    },
  },

  defaultVariants: {
    shape: "primary",
  },
});
