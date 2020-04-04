import React from "react";

import Grid from "components/grid";
import Box from "components/box";

const MasonryGrid = ({ children }) => {
  const cols = [[], []];

  React.Children.forEach(children, (child, i) => cols[i % 2].push(child));

  return (
    <Grid gridColumn="span 12" fluid p={0} mb={-16}>
      <Box gridColumn="span 12" display={["block", "none"]}>
        {children}
      </Box>

      <Box gridColumn="span 6" display={["none", "block"]}>
        {cols[0]}
      </Box>

      <Box gridColumn="span 6" display={["none", "block"]}>
        {cols[1]}
      </Box>
    </Grid>
  );
};

export default MasonryGrid;
