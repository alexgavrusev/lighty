import React from "react";

import Box from "components/box";
import { Image } from "components/image";

export const ResultCard = ({ children }) => {
  const [image, heading, text] = React.Children.toArray(children);

  return (
    <Box
      bg="surface.1"
      borderRadius={4}
      borderWidth={1}
      borderStyle="solid"
      borderColor="border.inactive"
      // Cut image corners
      overflow="hidden"
      display="flex"
      flexDirection={["column", "row", "column"]}
      height="100%"
    >
      <Box flex={"1 1 0"}>{image}</Box>
      <Box flex={"1 1 0"} p={16}>
        <Box pb={16}>{heading}</Box>
        {text}
      </Box>
    </Box>
  );
};

export const ResultImage = (props) => <Image width={1} {...props} />;
