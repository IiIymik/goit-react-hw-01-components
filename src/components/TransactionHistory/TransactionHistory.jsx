import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
	return (
		<table className={styles.table}>
			<thead className={styles.title}>
				<tr>
					<th className={styles.titleItem}>Type</th>
					<th className={styles.titleItem}>Amount</th>
					<th className={styles.titleItem}>Currency</th>
				</tr>
			</thead>

			<tbody className={styles.list}>
				{items.map(item => (
					<tr key={item.id} className={styles.item}>
						<td align="center" className={styles.td}>
							{item.type}
						</td>
						<td align="center" className={styles.td}>
							{item.amount}
						</td>
						<td align="center" className={styles.td}>
							{item.currency}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

TransactionHistory.prototype = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired,
			amount: PropTypes.string.isRequired,
			currency: PropTypes.string.isRequired,
		}),
	),
};
