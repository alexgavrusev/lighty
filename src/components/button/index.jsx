import React from "react";
import { motion } from "framer-motion";

import { MotionBox } from "components/box";
import { ButtonText } from "components/typography";

const MotionButton = (props) => <MotionBox as={motion.button} {...props} />;

// TODO: animations and remove outline

export const OutlinedButton = ({ disabled, onClick, children, ...props }) => (
  <MotionButton
    variants={(theme) => ({
      normal: {
        backgroundColor: theme.colors.primary[200],
        color: theme.colors.surface[0],
        cursor: "pointer",
      },
      hover: {
        backgroundColor: theme.colors.primary[400],
        color: theme.colors.surface[0],
        cursor: "pointer",
      },
      disabled: {
        backgroundColor: theme.colors.surface[1],
        color: theme.colors.text.mediumEmphasis,
        cursor: "not-allowed",
      },
    })}
    animate={disabled ? "disabled" : "normal"}
    initial={false}
    whileHover={disabled ? "disabled" : "hover"}
    disabled={disabled}
    onClick={onClick}
    p={16}
    border={0}
    borderRadius={4}
    {...props}
  >
    <ButtonText>{children}</ButtonText>
  </MotionButton>
);

export const TextButton = (props) => (
  <OutlinedButton
    variants={(theme) => ({
      normal: {
        color: theme.colors.primary[200],
        backgroundColor: "transparent",
        cursor: "pointer",
      },
      hover: {
        color: theme.colors.primary[400],
        backgroundColor: "transparent",
        cursor: "pointer",
      },
      disabled: {
        color: theme.colors.surface[2],
        backgroundColor: "transparent",
        cursor: "not-allowed",
      },
    })}
    p={0}
    {...props}
  />
);
