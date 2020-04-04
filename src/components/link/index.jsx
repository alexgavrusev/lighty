import React from "react";
import { css } from "styled-components";
import { Link } from "gatsby";
import { motion } from "framer-motion";

import { MotionBox } from "components/box";
import { Text } from "components/typography";

const MotionInternalLink = motion.custom(Link);

const TextA = (props) => <Text as={motion.a} {...props} />;
const TextLink = (props) => <Text as={MotionInternalLink} {...props} />;

export const ExternalLink = (props) => (
  <MotionBox
    forwardedAs={TextA}
    css={css`
      text-decoration: underline;

      &::after {
        /* Used inside other capsized text */
        display: none;
      }
    `}
    variants={(theme) => ({
      initial: {
        color: theme.colors.primary[200],
      },
      hover: {
        color: theme.colors.primary[400],
      },
    })}
    initial={false}
    animate="initial"
    whileHover="hover"
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  />
);

export const InternalLink = (props) => (
  <ExternalLink forwardedAs={TextLink} {...props} />
);
