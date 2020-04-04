import React, { forwardRef } from "react";

import Grid from "components/grid";

const Section = forwardRef((props, ref) => (
  <Grid as="section" ref={ref} py={[32, 32, 48, 64]} {...props} />
));

export default Section;
