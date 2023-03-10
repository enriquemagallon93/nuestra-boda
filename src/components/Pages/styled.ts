import styled from "styled-components";
import { TextStyled } from "../Text/styled";
import { device } from "../../utils";

export const Subtitle = styled(TextStyled)`
  font-family: Rouge Script;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  z-index: 1;
  color: #664601;

  @media ${device.mobileS} {
    font-size: 30px;
  }

  @media ${device.tablet} {
    font-size: 50px;
  }

  @media ${device.laptop} {
    font-size: 80px;
  }

  @media ${device.laptopL} {
    font-size: 80px;
  }
`;

export const Title = styled(TextStyled)`
  font-family: Rouge Script;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  z-index: 1;
  color: #664601;

  @media ${device.mobileS} {
    font-size: 60px;
  }

  @media ${device.tablet} {
    font-size: 150px;
  }

  @media ${device.laptop} {
    font-size: 200px;
  }

  @media ${device.laptopL} {
    font-size: 200px;
  }
`;

export const Page1Wrapper = styled.div`
  height: 100%;
  background-color: rgba(10, 10, 10, 0.4);
  display: flex;
`;

export const Blur = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffffa8;
  opacity: 0.7;
  padding: 15px;
  margin: auto;

  @media ${device.tablet} {
    margin: 50px;
    padding: 50px;
    padding-top: 25px;
    padding-bottom: 50px;
  }
`;

export const Page2Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex: 1;
  width: 95%;
  height: 100%;
  align-items: center;

  @media ${device.mobileS} {
    justify-content: end;
  }

  @media ${device.tablet} {
    justify-content: center;
  }
`;

export const Page3Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Page2Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  background-color: #ffffffa8;

  ${TextStyled} {
    font-family: "Podkova", sans-serif;
  }

  @media ${device.mobileS} {
    margin: auto;
    padding: 30px;
  }

  @media ${device.tablet} {
    margin: 100px;
    padding: 100px;
    padding-top: 50px;
    padding-bottom: 100px;
  }
`;

export const Page3Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  background-color: #ffffffa8;

  ${TextStyled} {
    font-family: "Podkova", sans-serif;
  }

  width: 100%;
  height: 100%;
`;

export const MapStyled = styled.iframe`
  @media ${device.mobileS} {
    width: 250px;
    height: 250px;
  }

  @media ${device.mobileM} {
    width: 320px;
    height: 400px;
  }

  @media ${device.tablet} {
    width: 560px;
    height: 400px;
  }
`;

export const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 50px 0;
`;
