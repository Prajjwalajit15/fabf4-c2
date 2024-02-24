import React from 'react';

const CoinTableRow = ({ coin }) => {
  return (
    <tr>
      <td>{coin.name}</td>
      <td>{coin.symbol}</td>
      <td>${coin.current_price}</td>
      <td>${coin.total_volume}</td>
    </tr>
  );
};

export default CoinTableRow;
