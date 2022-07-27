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
        background: "Black",
        color: "White",
        border: "1px solid Black",
        transition: ".2s all",

        "&:hover": {
          filter: "brightness(0.9)"
        },

        "&:focus": {
          outline: "none"
        }
      },

      secondary: {
        background: "transparent",
        color: "Black",
        border: "1px solid Black",
        transition: ".2s all",
        "&:hover": {
          background: "Black",
          color: "White"
        }
      }
    },

    color: {
      green: {
        background: "#34CB79"
      }
    },

    danger: {
      true: {}
    }
  },

  compoundVariants: [
    {
      shape: "secondary",
      danger: true,
      css: {
        "&:hover": {
          background: "#dc2626",
          color: "White",
          border: "1px solid #dc2626"
        }
      }
    },

    {
      shape: "primary",
      color: "green",
      css: {
        borderColor: "#34CB79"
      }
    }
  ],

  defaultVariants: {
    shape: "primary"
  }
});
