import ProfileList from '../ProfileList/ProfileList';
import FriendList from '../FriendList/FriendList';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import cards from '../../data/card.json';
import statistics from '../../data/statistical-data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';

export default function App() {
	return (
		<div>
			<Section title="Задание 1">
				<ProfileList items={cards} />
			</Section>
			<Section title="Задание 2">
				<Statistics title="Upload stats" stats={statistics} />
			</Section>
			<Section title="Задание 3">
				<FriendList friends={friends} />,
			</Section>
			<Section title="Задание 4">
				<TransactionHistory items={transactions} />;
			</Section>
		</div>
	);
}
