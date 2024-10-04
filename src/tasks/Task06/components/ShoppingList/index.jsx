import { useState } from 'react';

import styles from './style.module.css';
import { formatCurrency } from '../../../../utils';
import { ITEMS } from '../../../../constants';

function ShoppingList() {
  // eslint-disable-next-line no-unused-vars
  const [items, _] = useState(ITEMS);

  const totalPurchase = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista de Compras</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Item</th>
            <th>Preço Unitário</th>
            <th>Quantidade</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{formatCurrency(item.price)}</td>
              <td>{item.quantity}</td>
              <td>{formatCurrency(item.price * item.quantity)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan='3'>Total da Compra:</td>
            <td>{formatCurrency(totalPurchase)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default ShoppingList;
