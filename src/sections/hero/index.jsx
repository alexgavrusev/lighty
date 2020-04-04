import React from "react";

import Section from "components/section";
import Box from "components/box";
import { Image } from "components/image";
import { HeroHeading } from "components/typography";
import { OutlinedButton } from "components/button";

import logo from "images/logo.svg";

const Hero = ({ onClick }) => (
  <Section gridRowGap={[32, 32, 48, 64]}>
    <Box gridColumn="span 12">
      <Image src={logo} alt="lighty.agency" />
    </Box>

    <Box gridColumn="span 12">
      <HeroHeading>
        Делаем быстрые сайты,
        <br /> максимизирующие <wbr /> продажи
      </HeroHeading>
    </Box>

    <Box gridColumn="span 12">
      <OutlinedButton onClick={onClick}>Заказать сайт</OutlinedButton>
    </Box>
  </Section>
);

export default Hero;
