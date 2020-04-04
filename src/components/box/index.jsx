import styled from "styled-components";
import {
  space,
  color,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
} from "styled-system";

import React from "react";
import { useTheme } from "styled-components";
import { motion } from "framer-motion";

const Box = styled.div`
  ${space}
  ${color}
  ${typography}
  ${layout}
  ${flexbox}
  ${grid}
  ${background}
  ${border}
  ${position}
  ${shadow}
`;

export const MotionBox = React.forwardRef(
  ({ variants = {}, ...props }, ref) => {
    const theme = useTheme();

    return (
      <Box
        as={motion.div}
        ref={ref}
        variants={typeof variants === "function" ? variants(theme) : variants}
        {...props}
      />
    );
  }
);

export default Box;
