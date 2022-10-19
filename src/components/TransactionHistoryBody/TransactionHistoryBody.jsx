import PropTypes from 'prop-types';
import { TableBody } from './TransactionHistoryBody.styled';
import TransactionHistoryRow from '../TransactionHistoryRow/TransactionHistoryRow';

export default function TransactionHistoryBody({ items }) {
  return (
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
  );
}
TransactionHistoryBody.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
