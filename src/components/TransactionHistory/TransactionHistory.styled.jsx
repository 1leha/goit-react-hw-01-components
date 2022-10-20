import styled from 'styled-components';

export const TableStyled = styled.table`
  width: 25%;

  font-size: ${p => p.theme.fontSizes.m};

  border-collapse: collapse;

  background-color: ${p => p.theme.colors.secondary};
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.tableBodySeparator};
  box-shadow: ${p => p.theme.shadows.standart};
`;
