import React from "react";
import { css } from "styled-components";

import Box, { MotionBox } from "components/box";
import { FluidImage } from "components/image";
import { ExternalLink } from "components/link";

const Case = ({ image, description, link, ...props }) => (
  <Box pb={16}>
    <MotionBox
      css={css`
        cursor: pointer;
      `}
      overflow="hidden"
      borderRadius={4}
      variants={{
        inital: { scale: 1 },
        hover: { scale: 1.025 },
      }}
      initial="initial"
      whileHover="hover"
    >
      <ExternalLink href={link} aria-label={description}>
        <FluidImage fluid={image} />
      </ExternalLink>
    </MotionBox>
  </Box>
);

export default Case;
