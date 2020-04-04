import React, { forwardRef } from "react";
import { css } from "styled-components";
import capsize from "capsize";

import { media } from "theme";

import Box from "components/box";

const robotoFontMetrics = {
  capHeight: 1456,
  ascent: 1900,
  descent: -500,
  lineGap: 0,
  unitsPerEm: 2048,
};

const robotoSlabFontMetrics = {
  capHeight: 1456,
  ascent: 2146,
  descent: -555,
  lineGap: 0,
  unitsPerEm: 2048,
};

const capsizeBuilder = (fontMetrics) => (capHeight) =>
  capsize({
    fontMetrics,
    capHeight: capHeight,
    lineGap: capHeight,
  });

const robotoCapsize = capsizeBuilder(robotoFontMetrics);
const robotoSlabCapsize = capsizeBuilder(robotoSlabFontMetrics);

// For some obnoxious reason, if this styles are defined right before their components, everything breaks and only spanStyles are applied
const spanXsStyles = robotoCapsize(12);
const spanMdStyles = robotoCapsize(14);

const subheadingXsStyles = robotoSlabCapsize(14);
const subheadingMdStyles = robotoSlabCapsize(16);

const headingXsStyles = robotoSlabCapsize(14);
const headingSmStyles = robotoSlabCapsize(16);
const headingMdStyles = robotoSlabCapsize(20);

const heroHeadingXsStyles = robotoSlabCapsize(16);
const heroHeadingSmStyles = robotoSlabCapsize(20);
const heroHeadingMdStyles = robotoSlabCapsize(24);
const heroHeadingLgStyles = robotoSlabCapsize(28);

const buttonTextStyles = robotoCapsize(12);

export const Text = forwardRef(({ as = "span", ...props }, ref) => (
  <Box
    ref={ref}
    as={as}
    // as={forwardedAs}
    fontFamily="Roboto"
    color="text.highEmphasis"
    css={css`
      ${spanXsStyles}
      ${media.md`${spanMdStyles}`}
    `}
    {...props}
  />
));

export const Subheading = ({ as = "h2", ...props }) => (
  <Text
    forwardedAs={as}
    fontFamily="Roboto Slab"
    css={css`
      ${subheadingXsStyles}
      ${media.md`${subheadingMdStyles}`}
    `}
    {...props}
  />
);

export const Heading = (props) => (
  <Subheading
    css={css`
      white-space: nowrap;
      ${headingXsStyles}
      ${media.sm`${headingSmStyles}`}
      ${media.md`${headingMdStyles}`}
    `}
    forwardedAs="h1"
    {...props}
  />
);

export const HeroHeading = (props) => (
  <Heading
    css={css`
      ${heroHeadingXsStyles}
      ${media.sm`${heroHeadingSmStyles}`}
      ${media.md`${heroHeadingMdStyles}`}
      ${media.lg`${heroHeadingLgStyles}`}
    `}
    {...props}
  />
);

export const ButtonText = (props) => (
  <Text
    css={css`
      text-transform: uppercase;
      outline: none;
      ${buttonTextStyles}
    `}
    color="inherit"
    textAlign="center"
    fontWeight={500}
    {...props}
  />
);

export const OrderedList = (props) => <Box as="ol" {...props} />;

export const ListItem = (props) => <Text as="li" {...props} />;
