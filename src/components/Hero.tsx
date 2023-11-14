import * as React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { BrandInfoContext } from "./ContactContext/BrandInfoContextProvider";

const Hero = () => {
  const { brand } = React.useContext(BrandInfoContext);
  return (
    <HeroContainer id="home">
      <HeroBg>
        <Overlay />
        <VideoBg
          src={brand?.hero?.url}
          autoPlay
          loop
          muted
          playsInline
        ></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroH1>{brand?.brand}</HeroH1>
          <HeroP>{brand?.slogan}</HeroP>
          <Button to="#sessions" primary="true" big="true" round="true">
            Courses
          </Button>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;
  color: #fff;
  position: relative;
`;

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

const HeroH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  font-weight: bold;
  padding: 0 1rem;
  text-align: center;
`;
const HeroP = styled.p`
  font-size: clamp(1rem, 3vw, 3rem);
  margin-bottom: 2rem;
  font-weight: 400;
  text-align: center;
`;

const HeroContent = styled.div`
  z-index: 10;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;
const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
  line-height: 1.1;
  font-width: bold;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(
    0,
    0,
    0,
    0.6
  ); /* Adjust the background color and opacity as needed */
  z-index: 1;
`;
