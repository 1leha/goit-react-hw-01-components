import styled from '@emotion/styled';

export const TableBodyStyled = styled.tbody`
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
