import React, { forwardRef } from "react";

import Box from "components/box";

const Grid = forwardRef(({ fluid = false, ...props }, ref) => (
  <Box
    ref={ref}
    width={1}
    maxWidth={fluid ? "none" : ["none", "600px", "960px", "1176px"]}
    mx="auto"
    display="grid"
    gridTemplateColumns="repeat(12, 1fr)"
    gridGap={16}
    p={16}
    {...props}
  />
));

export default Grid;
