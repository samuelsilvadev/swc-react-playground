import { createCss } from "@stitches/react";

export const { styled, global } = createCss({
  media: {
    sm: "(min-width: 48em)" /* (768px / 16)*/,
    md: "(min-width: 64em)" /* (1024px / 16) */,
  },
});
