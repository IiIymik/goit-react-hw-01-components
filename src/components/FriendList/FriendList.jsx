import FriendListItem from '../FriendListItem/FriendListItem';
import styles from './FriendList.module.css';

export default function FriendList({ friends }) {
	return (
		<ul className={styles.list}>
			{friends.map(item => (
				<li className="item" key={item.id}>
					<FriendListItem
						avatar={item.avatar}
						name={item.name}
						isOnline={item.isOnline}
					/>
				</li>
			))}
		</ul>
	);
}
