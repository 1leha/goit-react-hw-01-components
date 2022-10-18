import styled from '@emotion/styled';

export const Table = styled.table`
  padding: 0;
  margin: 0;
  width: 25%;

  font-size: 16px;

  border-collapse: collapse;

  background-color: white;
  border: 1px solid var(--tableBodySeparator);
  box-shadow: var(--shadow);
`;

export const TableHead = styled.thead`
  text-transform: uppercase;
  letter-spacing: 2px;

  background-color: var(--tableHeadBGColor);
  color: white;
`;

export const TableHeadCell = styled.th`
  padding: 5px;
  width: 33.333%;

  &:not(:last-child) {
    border-right: 1px solid white;
  }
`;

export const TableBody = styled.tbody`
  padding: 5px;

  text-align: center;
  letter-spacing: 0px;

  & tr {
    &:nth-of-type(even) {
      background-color: var(--tableEvenRowBGColor);
    }

    &:nth-of-type(odd) {
      background-color: var(--tableOddRowBGColor);
    }
  }
`;
