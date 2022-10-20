import { TableHeadStyled, TableHeadCellStyled } from './TransactionHistoryHeader.styled';

export default function TransactionHistoryHeader() {
  return (
    <TableHeadStyled>
      <tr>
        <TableHeadCellStyled>Type</TableHeadCellStyled>
        <TableHeadCellStyled>Amount</TableHeadCellStyled>
        <TableHeadCellStyled>Currency</TableHeadCellStyled>
      </tr>
    </TableHeadStyled>
  );
}
