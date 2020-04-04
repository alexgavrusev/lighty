import React, { useRef } from "react";
import scrollIntoView from "scroll-into-view";

import Hero from "sections/hero";
import Results from "sections/results";
import Cases from "sections/cases";
import HowWeWork from "sections/how-we-work";
import Contact from "sections/contact";

const Index = () => {
  const formRef = useRef();
  const onHeroButtonClick = () => scrollIntoView(formRef.current);

  return (
    <>
      <Hero onClick={onHeroButtonClick} />
      <Results />
      <Cases />
      <HowWeWork />
      <Contact ref={formRef} />
    </>
  );
};
export default Index;
