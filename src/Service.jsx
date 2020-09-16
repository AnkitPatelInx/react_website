import React from 'react';
import Common from './Common';
import img from "./service.jpg";

function Service() {
  return (
    <Common 
        pageName="Service Page" 
        description="This is service page Welcome here you are at right place"
        img={img}
    />
  );
}

export default Service;