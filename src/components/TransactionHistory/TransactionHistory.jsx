import TransactionHistoryHeader from '../TransactionHistoryHeader/TransactionHistoryHeader';
import TransactionHistoryBody from '../TransactionHistoryBody/TransactionHistoryBody';

import { TableStyled } from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <TableStyled>
      <TransactionHistoryHeader />
      <TransactionHistoryBody items={items} />
    </TableStyled>
  );
}
