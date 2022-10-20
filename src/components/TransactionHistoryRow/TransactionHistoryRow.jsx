import PropTypes from 'prop-types';
import { TableBodyCellStyled } from './TransactionHistoryRow.styled';

export default function TransactionHistoryRow({ type, amount, currency }) {
  return (
    <tr>
      <TableBodyCellStyled>{type}</TableBodyCellStyled>
      <TableBodyCellStyled>{amount}</TableBodyCellStyled>
      <TableBodyCellStyled>{currency}</TableBodyCellStyled>
    </tr>
  );
}

TransactionHistoryRow.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
