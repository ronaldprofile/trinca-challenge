import { keyframes, styled } from "../../../stitches.config";

const animationLoading = keyframes({
  to: {
    transform: "scaleY(2)",
  },
});
export const LoadingContainer = styled("div", {
  width: "100vw",
  height: "100vh",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "rgba(30,41,51,.45)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backdropFilter: "blur(4px)",
  zIndex: 200,

  span: {
    width: "1rem",
    height: "3.125rem",
    margin: "0 0.125rem",
    background: "#FFD836",
    display: "inline-block",

    "&:nth-child(1)": {
      animation: `${animationLoading} 0.5s -0.45s ease-in-out alternate infinite`,
    },

    "&:nth-child(2)": {
      animation: `${animationLoading} 0.5s -0.3s ease-in-out alternate infinite`,
    },

    "&:nth-child(3)": {
      animation: `${animationLoading} 0.5s -0.15s ease-in-out alternate infinite`,
    },

    "&:nth-child(4)": {
      animation: `${animationLoading} 0.5s 0s ease-in-out alternate infinite`,
    },
  },
});
