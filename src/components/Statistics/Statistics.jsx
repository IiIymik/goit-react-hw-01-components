import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export default function Statistics({ title, stats }) {
	return (
		<section className={styles.section}>
			<h2 className="title">{title}</h2>
			<ul className={styles.list}>
				{stats.map(item => (
					<li className={styles.item} key={item.id}>
						<span className="label">{item.label}</span>
						<span className="percentage">{item.percentage}</span>
					</li>
				))}
			</ul>
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
