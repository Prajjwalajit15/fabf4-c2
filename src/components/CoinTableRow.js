import React from 'react';

const CoinTableRow = ({ coin }) => {
  return (
    <tr className="coin-table-row">
      <td>
        <img src={coin.image} alt={coin.name} style={{ width: '30px', marginRight: '10px' }} />
        {coin.name}
      </td>
      <td>{coin.symbol}</td>
      <td>${coin.current_price}</td>
      <td>${coin.total_volume}</td>
      <td>{coin.price_change_percentage_24h.toFixed(2)}%</td>
    </tr>
  );
};

export default CoinTableRow;
