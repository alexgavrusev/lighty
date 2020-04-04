import React, { useState, useRef, forwardRef } from "react";
import { css } from "styled-components";
import { motion } from "framer-motion";

import Grid from "components/grid";
import { MotionBox } from "components/box";
import { Text } from "components/typography";

const MotionInput = forwardRef((props, ref) => (
  <MotionBox as={motion.input} ref={ref} {...props} />
));

const MotionTextarea = forwardRef((props, ref) => (
  <MotionBox as={motion.textarea} ref={ref} {...props} />
));

const MotionLabel = (props) => <MotionBox as={motion.label} {...props} />;

export const Form = (props) => (
  <Grid p={0} fluid gridColumn="span 12" as="form" {...props} />
);

export const Input = ({
  name,
  value,
  onChange,
  label,
  textarea,
  minRows,
  disabled,
}) => {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef();

  const onInputChange = (e) => {
    if (textarea) {
      const { paddingTop, paddingBottom, lineHeight } = getComputedStyle(
        inputRef.current
      );

      inputRef.current.rows = minRows;

      const newRows = Math.floor(
        (inputRef.current.scrollHeight -
          parseInt(paddingTop) -
          parseInt(paddingBottom)) /
          parseInt(lineHeight)
      );

      if (newRows > minRows) {
        inputRef.current.rows = newRows;
      }
    }

    onChange(e);
  };

  let variant = "initial";
  if (value) {
    variant = "filled";
  }
  if (focused) {
    variant = "focused";
  }

  let hoverVariant = "hover";
  if (focused) {
    hoverVariant = "focused";
  } else if (disabled) {
    hoverVariant = "filled";
  }

  const transition = { type: "tween", duration: 0.125 };

  /* Overrides capsize padding in input and label (its horizontal 0.05px doesn't really matter) */
  return (
    <MotionBox
      animate={variant}
      whileHover={hoverVariant}
      initial={false}
      position="relative"
    >
      <Text
        forwardedAs={textarea ? MotionTextarea : MotionInput}
        ref={inputRef}
        css={css`
          outline: none;
          caret-color: ${(props) => props.theme.colors.primary[200]};
          resize: none;

          /* Only way to remove default autofill style */
          :-webkit-autofill {
            -webkit-box-shadow: 0 0 0px 1000px
              ${(props) => props.theme.colors.surface[0]} inset;
          }

          -webkit-text-fill-color: ${(props) =>
            props.theme.colors.text.highEmphasis} !important;

          padding: 16px;
        `}
        variants={(theme) => ({
          focused: {
            borderColor: theme.colors.primary[200],
          },
          filled: {
            borderColor: theme.colors.text.mediumEmphasis,
          },
          initial: {
            borderColor: theme.colors.text.mediumEmphasis,
          },
          hover: {
            borderColor: theme.colors.text.highEmphasis,
          },
        })}
        transition={transition}
        bg="transparent"
        type={textarea ? undefined : "text"}
        width={1}
        // px={32}
        // py={32}
        borderWidth={1}
        borderStyle="solid"
        borderRadius={4}
        name={name}
        value={value}
        onChange={onInputChange}
        id={name}
        disabled={disabled}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        zIndex={100}
        rows={textarea ? minRows : undefined}
      />
      <Text
        css={css`
          padding: 0 8px 0 8px;
        `}
        forwardedAs={MotionLabel}
        variants={(theme) => ({
          focused: {
            x: 8,
            y: "-50%",
            color: theme.colors.primary[200],
          },
          filled: {
            x: 8,
            y: "-50%",
            color: theme.colors.text.mediumEmphasis,
          },
          initial: {
            x: 8,
            // (64 + 2 - 16) / 2
            y: 25,
            color: theme.colors.text.mediumEmphasis,
          },
          hover: {
            color: theme.colors.text.highEmphasis,
          },
        })}
        transition={transition}
        htmlFor={name}
        bg="surface.0"
        position="absolute"
        top={0}
        left={0}
      >
        {label}
      </Text>
    </MotionBox>
  );
};
