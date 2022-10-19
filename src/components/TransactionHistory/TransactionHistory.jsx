import TransactionHistoryHeader from '../TransactionHistoryHeader/TransactionHistoryHeader';
import TransactionHistoryBody from '../TransactionHistoryBody/TransactionHistoryBody';

import { Table } from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <Table>
      <TransactionHistoryHeader />
      <TransactionHistoryBody items={items} />
    </Table>
  );
}
