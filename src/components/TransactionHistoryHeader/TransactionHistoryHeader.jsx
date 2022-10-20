import { TableHeadCellStyled } from './TransactionHistoryHeader.styled';
import { Box } from '../Box';

export default function TransactionHistoryHeader() {
  return (
    <Box
      as="thead"
      textTransform="uppercase"
      letterSpacing="tableHeader"
      backgroundColor="tableHead"
      color="tableHeadText"
    >
      <tr>
        <TableHeadCellStyled>Type</TableHeadCellStyled>
        <TableHeadCellStyled>Amount</TableHeadCellStyled>
        <TableHeadCellStyled>Currency</TableHeadCellStyled>
      </tr>
    </Box>
  );
}
