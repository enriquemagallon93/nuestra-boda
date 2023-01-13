import styled from "styled-components";

export const WrapperPage = styled("div")<{index: number}>`
  width: 100vw;
  height: ${({index}) => index === 1 ? 200 : 100}vh;
 
`;
