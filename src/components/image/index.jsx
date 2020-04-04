import React from "react";
import GatsbyImage from "gatsby-image";

import Box from "components/box";

export const FluidImage = (props) => (
  <Box as={GatsbyImage} height="100%" {...props} />
);

export const Image = (props) => <Box as="img" display="block" {...props} />;
