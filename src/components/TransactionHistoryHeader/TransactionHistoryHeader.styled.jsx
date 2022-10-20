import styled from 'styled-components';

export const TableHeadCellStyled = styled.th`
  padding: ${p => p.theme.space[3]}px;
  width: 33.333%;

  &:not(:last-child) {
    border-right: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.secondary};
  }
`;
