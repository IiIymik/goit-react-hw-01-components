import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import randomColor from '../../utils/colorSwitch';

export default function Statistics({ title, stats }) {
	return (
		<section className={styles.section}>
			<div className={styles.card}>
				{title && <h2 className={styles.title}>{title}</h2>}
				<ul className={styles.list}>
					{stats.map(item => (
						<li
							className={styles.item}
							key={item.id}
							style={{ backgroundColor: randomColor() }}
						>
							<span className={styles.label}>{item.label}</span>
							<span className={styles.percentage}>{item.percentage}%</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

Statistics.prototype = {
	title: PropTypes.string,
	stats: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
		}),
	),
};
