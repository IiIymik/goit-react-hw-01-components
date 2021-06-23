import ProfileList from './components/ProfileList';
import Section from './components/Section';
import cards from './card.json';

export default function App() {
	return (
		<div>
			<Section title="Задание 1">
				<ProfileList items={cards} />
			</Section>
		</div>
	);
}
