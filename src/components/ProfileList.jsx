import PropTypes from 'prop-types';
import Profile from './Profile';

function ProfileList({ items }) {
	return (
		<ul>
			{items.map(item => (
				<li key={item.id}>
					<Profile
						avatar={item.avatar}
						name={item.name}
						tag={item.tag}
						location={item.location}
						followers={item.followers}
						views={item.views}
						likes={item.likes}
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
