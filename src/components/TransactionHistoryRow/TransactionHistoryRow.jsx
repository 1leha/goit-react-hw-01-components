import PropTypes from 'prop-types';
import { TableBodyCell } from './TransactionHistoryRow.styled';

export default function TransactionHistoryRow({ type, amount, currency }) {
  return (
    <tr>
      <TableBodyCell>{type}</TableBodyCell>
      <TableBodyCell>{amount}</TableBodyCell>
      <TableBodyCell>{currency}</TableBodyCell>
    </tr>
  );
}

TransactionHistoryRow.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
