import { TableHead, TableHeadCell } from './TransactionHistoryHeader.styled';

export default function TransactionHistoryHeader() {
  return (
    <TableHead>
      <tr>
        <TableHeadCell>Type</TableHeadCell>
        <TableHeadCell>Amount</TableHeadCell>
        <TableHeadCell>Currency</TableHeadCell>
      </tr>
    </TableHead>
  );
}
