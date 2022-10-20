import styled from 'styled-components';

export const TableBodyCellStyled = styled.td`
  padding: ${p => p.theme.space[3]}px;

  &:not(:last-child) {
    border-right: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.tableBodySeparator};
  }
`;
