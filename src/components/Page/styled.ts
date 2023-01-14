import styled from "styled-components";

export const WrapperPage = styled("div")<{ index: number }>`
  width: 100vw;
  padding-top: ${({ index }) => (index === 1 ? `140.1971522453%` : 0)};
  height: ${({ index }) => (index === 1 ? 0 : index === 2 ? 150 : 100)}vh;
  position: relative;
`;
