import PropTypes from 'prop-types';
import { TableBodyStyled } from './TransactionHistoryBody.styled';
import TransactionHistoryRow from '../TransactionHistoryRow/TransactionHistoryRow';

export default function TransactionHistoryBody({ items }) {
  return (
    <TableBodyStyled>
      {items.map(({ id, type, amount, currency }) => (
        <TransactionHistoryRow key={id} type={type} amount={amount} currency={currency} />
      ))}
    </TableBodyStyled>
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
