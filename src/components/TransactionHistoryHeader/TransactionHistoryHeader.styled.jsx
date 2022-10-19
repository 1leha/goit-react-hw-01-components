import styled from '@emotion/styled';

export const TableHead = styled.thead`
  text-transform: uppercase;
  letter-spacing: ${p => p.theme.letterSpacings.tableHeader};

  background-color: ${p => p.theme.colors.tableHead};
  color: ${p => p.theme.colors.tableHeadText};
`;

export const TableHeadCell = styled.th`
  padding: 5px;
  width: 33.333%;

  &:not(:last-child) {
    border-right: ${p => p.theme.borders.normal} ${p => p.theme.colors.secondary};
  }
`;
