import React from 'react';
import Common from './Common';
import img from "./about.jpeg";

function About() {
  return (
    <Common 
        pageName="About Page" 
        description="This is about page Welcome here you are at right place"
        img={img}
    />
  );
}

export default About;