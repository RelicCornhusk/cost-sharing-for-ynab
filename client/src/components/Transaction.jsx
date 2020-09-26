/* eslint-disable camelcase */
import React from 'react';
import {
  shape,
  string,
  number,
  bool,
  func,
} from 'prop-types';

const Transaction = ({
  type,
  handleSelectTransaction,
  transaction,
  isIsolated,
  txnNumber,
  checked = 0,
}) => {
  const editable = type === 'Transactions in Shared Categories';
  const {
    date,
    amount,
    memo,
    cleared,
    approved,
    payee_name,
    category_name,
    account_name,
  } = transaction;
  return (
    <div>
      {isIsolated && <span className="warning-symbol" />}
      {!isIsolated && <span className="validated-symbol" />}
      {editable && <input type="checkbox" checked={!!checked} onChange={(e) => handleSelectTransaction(e, transaction, txnNumber)} />}
      <span>
        {`${date} | $${amount / 1000} | ${memo} | ${cleared} | ${approved} | ${payee_name} | ${category_name} | ${account_name}`}
      </span>
    </div>
  );
};

Transaction.propTypes = {
  type: string.isRequired,
  handleSelectTransaction: func.isRequired,
  isIsolated: bool.isRequired,
  txnNumber: number.isRequired,
  checked: number,
  transaction: shape({
    date: string,
    amount: number,
    memo: string,
    cleared: string,
    approved: bool,
    payee_name: string,
    category_name: string,
  }).isRequired,
};

export default Transaction;
