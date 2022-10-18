import PropTypes from 'prop-types';
import TransactionHistoryRow from '../TransactionHistoryRow/TransactionHistoryRow';

import {
  Table,
  TableHead,
  TableHeadCell,
  TableBody,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <Table>
      <TableHead>
        <tr>
          <TableHeadCell>Type</TableHeadCell>
          <TableHeadCell>Amount</TableHeadCell>
          <TableHeadCell>Currency</TableHeadCell>
        </tr>
      </TableHead>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionHistoryRow
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </TableBody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
