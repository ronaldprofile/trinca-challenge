import * as RadioGroup from "@radix-ui/react-radio-group";
import { styled } from "../../../stitches.config";

export const IncludeDrink = styled(RadioGroup.Root, {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "1rem",

  "@media (min-width: 640px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
});

export const IncludeDrinkButton = styled(RadioGroup.Item, {
  width: "100%",
  padding: 14,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  background: "#e1faec !important",
  color: "#6C6C80",
  borderRadius: 6,

  "&[data-state=checked]": {
    background: "#ccfbf1 !important",
    border: "1px solid rgb(209, 213, 219)",
    cursor: "not-allowed",
    color: "#000",
  },

  "&[data-state=unchecked]:hover": {
    background: "#ccfbf1 !important",
    transition: "background 0.2s",
  },

  "@media (min-width: 640px)": {
    fontSize: 16,
  },
});
