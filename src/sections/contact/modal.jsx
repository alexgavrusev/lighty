import React from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { motion } from "framer-motion";
import { RemoveScroll } from "react-remove-scroll";

import Box, { MotionBox } from "components/box";
import Grid from "components/grid";
import { Subheading, Text } from "components/typography";
import { TextButton } from "components/button";

const MotionContent = motion.custom(DialogContent);
const MotionOverlay = motion.custom(DialogOverlay);

const Modal = ({ onDismiss, heading, text }) => (
  // HACK: DialogOverlay doesn't forward ref properly, so can't use motion.custom on it

  <MotionBox
    as={MotionOverlay}
    position="fixed"
    top={0}
    right={0}
    bottom={0}
    left={0}
    display="flex"
    justifyContent="stretch"
    alignItems="center"
    variants={{
      enter: { backgroundColor: "rgba(18, 18, 18, 0.75)" },
      exit: { backgroundColor: "rgba(18, 18, 18, 0)" },
    }}
    initial="exit"
    animate="enter"
    exit="exit"
    onDismiss={onDismiss}
  >
    <MotionBox
      as={MotionContent}
      variants={{
        enter: { scale: 1 },
        exit: { scale: 0 },
      }}
      initial="exit"
      animate="enter"
      exit="exit"
      width={1}
      className={RemoveScroll.classNames.fullWidth}
    >
      <Grid>
        <Box
          gridColumn={["span 12", "3 / span 8", " 5 / span 4"]}
          bg="surface.2"
          borderRadius={5}
          p={24}
        >
          <Subheading>{heading}</Subheading>
          <Box py={16}>
            <Text>{text}</Text>
          </Box>
          <TextButton onClick={onDismiss}>Ок</TextButton>
        </Box>
      </Grid>
    </MotionBox>
  </MotionBox>
);

export default Modal;
