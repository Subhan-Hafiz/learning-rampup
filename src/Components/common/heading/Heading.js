import React from "react";
import { Heading, Paragraph } from "grommet";
import "./Heading.css";

const HeadingComponent = ({ title, description, mt, mr, mb, ml}) => {
  return (
    <section className="heading">
      <Heading level={2} margin="none">
        {title}
      </Heading>
      <Paragraph margin={{top: mt, right: mr, bottom: mb, left: ml}}>
        {description}
      </Paragraph>
    </section>
  );
};

export default HeadingComponent;