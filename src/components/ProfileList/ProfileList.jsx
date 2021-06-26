import PropTypes from 'prop-types';
import Profile from '../Profille/Profile';
import styles from './ProfileList.module.css';

function ProfileList({ items }) {
	return (
		<ul className={styles.list}>
			{items.map(item => (
				<li key={item.id} className={styles.item}>
					<Profile
						avatar={item.avatar}
						name={item.name}
						tag={item.tag}
						location={item.location}
						followers={item.stats.followers}
						views={item.stats.views}
						likes={item.stats.likes}
					/>
				</li>
			))}
		</ul>
	);
}

ProfileList.prototype = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
		}),
	),
};

export default ProfileList;
