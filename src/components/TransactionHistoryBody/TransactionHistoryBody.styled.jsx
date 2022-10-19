import styled from '@emotion/styled';

export const TableBody = styled.tbody`
  padding: 5px;

  text-align: center;

  & tr {
    &:nth-of-type(even) {
      background-color: ${p => p.theme.colors.tableEvenRowBG};
    }

    &:nth-of-type(odd) {
      background-color: ${p => p.theme.colors.tableOddRowBG};
    }
  }
`;

export const TableBodyCell = styled.td`
  padding: 5px;

  &:not(:last-child) {
    border-right: ${p => p.theme.borders.normal} ${p => p.theme.colors.tableBodySeparator};
  }
`;
