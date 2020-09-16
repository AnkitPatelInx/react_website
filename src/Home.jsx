import React from 'react';
import Common from './Common';
import img from "./home.jpg";

function Home() {
  return (
    <>
        <Common 
            pageName="Home Page" 
            description="This is home page Welcome here you are at right place"
            img={img}
        />
    </>
  );
}

export default Home;