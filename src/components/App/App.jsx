import ProfileList from '../ProfileList/ProfileList';
import Section from '../Section/Section';
import cards from '../../data/card.json';

export default function App() {
	return (
		<div>
			<Section title="Задание 1">
				<ProfileList items={cards} />
			</Section>
		</div>
	);
}
