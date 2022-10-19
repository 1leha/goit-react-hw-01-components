import styled from '@emotion/styled';

export const Table = styled.table`
  padding: 0;
  margin: 0;
  width: 25%;

  font-size: ${p => p.theme.fontSizes.m};

  border-collapse: collapse;

  background-color: ${p => p.theme.colors.secondary};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.tableBodySeparator};
  box-shadow: ${p => p.theme.shadows.standart} ${p => p.theme.colors.shadow};
`;
