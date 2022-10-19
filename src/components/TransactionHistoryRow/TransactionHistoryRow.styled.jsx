import styled from '@emotion/styled';

export const TableBodyCell = styled.td`
  padding: 5px;

  &:not(:last-child) {
    border-right: ${p => p.theme.borders.normal} ${p => p.theme.colors.tableBodySeparator};
  }
`;
