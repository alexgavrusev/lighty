import React from "react";

import Box from "components/box";
import { Subheading, Text } from "components/typography";

const Item = ({ heading, description }) => (
  <Box gridColumn={["span 12", "span 12", "span 4"]}>
    <Box pb={24}>
      <Subheading>{heading}</Subheading>
    </Box>
    <Text>{description}</Text>
  </Box>
);

export default Item;
