import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Section from "components/section";
import Box from "components/box";
import { Heading } from "components/typography";

import MasonryGrid from "./masonry-grid";
import Case from "./case";

export const imageFragment = graphql`
  fragment Image on File {
    childImageSharp {
      fluid(quality: 90, webpQuality: 90, traceSVG: { color: "#24312E" }) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
`;

const Cases = () => {
  const {
    teaClub,
    hotbigbox,
    coinStory,
    trichologist,
  } = useStaticQuery(graphql`
    query Index {
      teaClub: file(relativePath: { eq: "cases/tea-club.png" }) {
        ...Image
      }

      hotbigbox: file(relativePath: { eq: "cases/hotbigbox.png" }) {
        ...Image
      }

      coinStory: file(relativePath: { eq: "cases/coin-story.png" }) {
        ...Image
      }

      trichologist: file(relativePath: { eq: "cases/trichologist.png" }) {
        ...Image
      }
    }
  `);

  const cases = [
    {
      image: teaClub.childImageSharp.fluid,
      link: "https://tea-club.gavrusev.vercel.app",
      description: "Лендинг для заказа чайной церемонии",
    },
    {
      image: hotbigbox.childImageSharp.fluid,
      link: "https://hotbigbox.now.sh",
      description: "Лендинг для набора носков",
    },
    {
      image: coinStory.childImageSharp.fluid,
      link: "https://coin-story.now.sh",
      description: "Лендинг для оценщиков и скупщиков антиквариата в Барнауле",
    },
    {
      image: trichologist.childImageSharp.fluid,
      link: "https://trichologist.gavrusev.vercel.app",
      description: "Лендинг для врача трихолога-дерматолога",
    },
  ];

  return (
    <Section>
      <Box gridColumn="span 12" pb={16}>
        <Heading>Кейсы</Heading>
      </Box>

      <MasonryGrid>
        {cases.map(({ image, link, description }, i) => (
          <Case key={i} image={image} link={link} description={description} />
        ))}
      </MasonryGrid>
    </Section>
  );
};

export default Cases;
