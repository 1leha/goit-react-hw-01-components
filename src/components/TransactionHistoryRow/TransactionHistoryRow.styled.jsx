import styled from '@emotion/styled';

export const TableBodyCell = styled.td`
  padding: 5px;

  &:not(:last-child) {
    border-right: 1px solid var(--tableBodySeparator);
  }
`;
