import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
	return (
		<div className={styles.container}>
			<span className={isOnline ? styles.online : styles.offline}></span>
			<img className="avatar" src={avatar} alt={name} width="48" />
			<p className="name">{name}</p>
		</div>
	);
}

FriendListItem.prototype = {
	avatar: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	isOnline: PropTypes.bool.isRequired,
};
