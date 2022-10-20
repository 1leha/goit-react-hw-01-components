import styled from 'styled-components';

export const TableBodyStyled = styled.tbody`
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
