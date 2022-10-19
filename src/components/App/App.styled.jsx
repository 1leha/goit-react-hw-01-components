import styled from '@emotion/styled';

export const AppStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
  align-items: center;
  font-size: ${p => p.theme.fontSizes.xxl};
  color: #010101;
  background-color: ${p => p.theme.colors.appBGColor};
`;
