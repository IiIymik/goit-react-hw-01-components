import PropTypes from 'prop-types';
import styles from './Section.module.css';

function Section({ title, children }) {
	return (
		<div className={styles.container}>
			{title && <h2 className={styles.title}>{title}</h2>}
			{children}
		</div>
	);
}

Section.prototype = {
	title: PropTypes.string,
	children: PropTypes.node,
};

export default Section;
