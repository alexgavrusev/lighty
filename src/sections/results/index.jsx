import React from "react";

import Section from "components/section";
import Box from "components/box";
import { Heading, Subheading, Text } from "components/typography";
import { ExternalLink } from "components/link";

import { ResultCard, ResultImage } from "./result";

import noLostClients from "images/results/no_lost_clients.svg";
import betterSeo from "images/results/better_seo.svg";
import moreProfit from "images/results/more_profit.svg";

const Results = () => (
  <Section gridTemplateRows="auto" gridAutoRows="1fr">
    <Box gridColumn="span 12" pb={16}>
      <Heading>
        Результаты уменьшения <wbr /> времени загрузки
      </Heading>
    </Box>

    <Box gridColumn={["span 12", "span 12", "span 4"]}>
      <ResultCard>
        <ResultImage
          src={noLostClients}
          alt="Клиент, закрывающий сайт из-за долгой загрузки"
        />
        <Subheading>Больше клиентов</Subheading>
        <Text>
          <ExternalLink href="https://www.thinkwithgoogle.com/intl/en-154/insights-inspiration/research-data/need-mobile-speed-how-mobile-latency-impacts-publisher-revenue/">
            53% людей уходят,
          </ExternalLink>{" "}
          если сайт загружается дольше 3 секунд
        </Text>
      </ResultCard>
    </Box>
    <Box gridColumn={["span 12", "span 12", "span 4"]}>
      <ResultCard>
        <ResultImage src={betterSeo} alt="Сайт на первом месте в поиске" />
        <Subheading>Легче попасть в топ</Subheading>
        <Text>
          <ExternalLink href="https://webmasters.googleblog.com/2018/01/using-page-speed-in-mobile-search.html">
            C 2018 года
          </ExternalLink>{" "}
          скорость сайта влияет на позицию в поиске
        </Text>
      </ResultCard>
    </Box>
    <Box gridColumn={["span 12", "span 12", "span 4"]}>
      <ResultCard>
        <ResultImage src={moreProfit} alt="График расходов и доходов" />
        <Subheading>Больше прибыли</Subheading>
        <Text>
          <ExternalLink href="https://www.gigaspaces.com/blog/amazon-found-every-100ms-of-latency-cost-them-1-in-sales/">
            Каждые 100 миллисекунд
          </ExternalLink>{" "}
          загрузки стоят до 1% выручки
        </Text>
      </ResultCard>
    </Box>
  </Section>
);

export default Results;
