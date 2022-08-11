import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { styled } from "../../../stitches.config";

export const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  width: 25,
  height: 25,
  border: "2px solid #FFD836",
  borderRadius: 9999,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "&[data-state=checked]": {
    background: "#FFD836",
    borderColor: "#FFD836",

    "&:hover": {
      filter: 'brightness(0.9)',
    },
  },
});
