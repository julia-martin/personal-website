import { keyframes } from "styled-components/macro";

export const COLORS = {
  offwhite: "hsl(60, 10%, 95%)", // #f4f4f1
  offwhiteTransparent: "hsla(60, 10%, 95%, 75%)",
  primary: "#BE007C", //	hsl(321, 100%, 37%)
  primaryDark: "hsl(321, 100%, 18%)",
  golden: "ffb56b",
  dark: "#1C1F31", //	hsl(231, 27%, 15%)
  darkBlue: "#2d3159",
  palette: {
    50: "FF8E83",
    100: "#ff6f61",
    200: "#f45666",
    300: "#e63d6c",
    400: "#d42274",
    500: "#be007c"
  }
};

export const GRADIENT = `linear-gradient(90deg, ${COLORS.palette['500']}, ${COLORS.palette['400']}, ${COLORS.palette['300']},${COLORS.palette['200']}, ${COLORS.palette['100']})`;

export const FONTS = {
  strong: "'Staatliches', sans-serif",
  normal: "'Spartan', sans-serif"
};

export const ANIMATIONS = {
  slideFromLeft: keyframes`
    from {
      transform: translateX(-20%);
      opacity: 0%;
    }
    to {
      transform: translateX(0%);
      opacity: 100%;
    }
  `,
  slideFromRight: keyframes`
    from {
      transform: translateX(20%);
      opacity: 0%;
    }
    to {
      transform: translateX(0%);
      opacity: 100%;
    }
  `,
  slideDown: keyframes`
    from {
      transform: translateY(-50%);
    }
    to {
      transform: translateY(0%);
    }
  `,
  spaceOut: keyframes`
    from {
      letter-spacing: 0.3rem;
    }
    to {
      letter-spacing: 3rem;
    }
  `
};