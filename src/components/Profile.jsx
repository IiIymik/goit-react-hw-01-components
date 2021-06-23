import PropTypes from 'prop-types';
import defaultImage from './undefinde.jpg';

export default function Profile({
	avatar = defaultImage,
	name,
	tag,
	location,
	followers,
	views,
	likes,
}) {
	return (
		<div className="profile">
			<div className="description">
				<img src={avatar} alt={name} className="avatar" width="260px" />
				<p className="name">{name}</p>
				<p className="tag">@{tag}</p>
				<p className="location">{location}</p>
			</div>

			<ul className="stats">
				<li>
					<span className="label">Followers</span>
					<span className="quantity">{followers}</span>
				</li>
				<li>
					<span className="label">Views</span>
					<span className="quantity">{views}</span>
				</li>
				<li>
					<span className="label">Likes</span>
					<span className="quantity">{likes}</span>
				</li>
			</ul>
		</div>
	);
}

Profile.prototype = {
	avatar: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.number.isRequired,
	followers: PropTypes.number.isRequired,
	views: PropTypes.number.isRequired,
	likes: PropTypes.number.isRequired,
};
