import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { StyledCheckbox } from "./styles";

type CheckboxProps = CheckboxPrimitive.CheckboxProps & {};

export function Checkbox({ children, ...props }: CheckboxProps) {
  return <StyledCheckbox {...props}>{children}</StyledCheckbox>;
}

type CheckboxIndicatorProps = CheckboxPrimitive.CheckboxIndicatorProps & {};

export function CheckboxIndicator({ children }: CheckboxIndicatorProps) {
  return (
    <CheckboxPrimitive.CheckboxIndicator>
      {children}
    </CheckboxPrimitive.CheckboxIndicator>
  );
}
