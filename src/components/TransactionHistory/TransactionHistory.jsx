import styles from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
	return (
		<table className={styles.table} border="1px solid grey">
			<thead>
				<tr>
					<th>Type</th>
					<th>Amount</th>
					<th>Currency</th>
				</tr>
			</thead>

			<tbody className={styles.list}>
				{items.map(item => (
					<tr key={item.id} className={styles.item}>
						<td align="center">{item.type}</td>
						<td align="center">{item.amount}</td>
						<td align="center">{item.currency}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
