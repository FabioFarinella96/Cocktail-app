import styled from "styled-components";
import { devices } from "../../utils/devices";

const HeroWrapper = styled.div`
  width: 100%;
  height: 60vh;
  position: relative;
  background-image: url(https://assets.gqindia.com/photos/609a8e5b2c7bfc93e2031ba2/master/pass/World%20Cocktail%20Day.jpeg);
  background-size: cover;
  transform: scaleY(100deg);
`;

const Herotitle = styled.h2`
  font-size: 3.5em;
  color: white;
  position: absolute;
  bottom: 50px;
  left: 30px;
  @media ${devices.tablet} {
    font-size: 5em;
    position: absolute;
    bottom: 10px;
    left: 120px;
  }
`;

const SpanTitle = styled.span`
  color: #f374f1;
`;

const BrTitle = styled.br``;

const HeroImage = styled.img.attrs({ alt: "Hero image" })`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <Herotitle>
        The art of <BrTitle />
        <SpanTitle>Cocktail</SpanTitle>
      </Herotitle>
      <HeroImage />
    </HeroWrapper>
  );
};

export default Hero;
