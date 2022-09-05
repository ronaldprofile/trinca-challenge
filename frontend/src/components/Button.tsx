import { styled } from "../../stitches.config";

export const Button = styled("button", {
  height: 50,
  padding: "0 20px",
  borderRadius: 4,
  fontSize: 16,
  fontWeight: 700,
  textTransform: "uppercase",

  variants: {
    shape: {
      primary: {
        background: "#FFD836",
        color: "White",
        border: "2px solid #FFD836",
        transition: ".2s all",

        "&:hover": {
          filter: "brightness(0.85)",
        },

        "&:focus": {
          outline: "none",
        },

        "&:disabled": {
          cursor: "not-allowed",
          filter: "brightness(0.75)",
        },
      },

      secondary: {
        background: "Black",
        color: "White",
        border: "1px solid Black",
        transition: ".2s all",
      },

      danger: {
        background: "#dc2626",
        color: "White",
        border: "1px solid #dc2626",
        transition: ".2s all",

        "&:hover": {
          filter: "brightness(0.80)",
        },
      },
    },

    color: {
      green: {
        background: "#34CB79",
      },
    },
  },

  defaultVariants: {
    shape: "primary",
  },
});
