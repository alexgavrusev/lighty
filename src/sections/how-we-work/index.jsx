import React from "react";

import Section from "components/section";
import Box from "components/box";
import { Heading } from "components/typography";

import Item from "./item";

const HowWeWork = () => (
  <Section>
    <Box gridColumn="span 12" pb={16}>
      <Heading>Наш подход</Heading>
    </Box>

    <Item
      heading="1. Flex scope"
      description="При сложностях жертвуем функционалом вместо срока, бюджета или качества
        — продукт начнет как можно раньше работать и приносить прибыль"
    />

    <Item
      heading="2. Ритмичные итерации"
      description="Показываем проделанную работу и корректируем результат на каждом этапе
        создания продукта"
    />

    <Item
      heading="3. Тщательная полировка"
      description="Добиваемся моментальной прогрузки и отзывчивости, срезая с сайта каждый
        лишний байт"
    />
  </Section>
);

export default HowWeWork;
