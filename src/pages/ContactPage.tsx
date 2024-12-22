import HeaderPage from "../components/HederPage";
import Contact from "../layout/Contact";

const ContactPage = () => {
	return (
		<div className="ContactPage page">
			<HeaderPage
				title="Kontakt"
				description="Nie ma głupich pytań, są tylko nieodkryte możliwości! Skontaktuj się ze mną, a wspólnie znajdziemy rozwiązanie idealne dla Ciebie. Twój projekt zaczyna się od rozmowy."
			/>
			<div className="ContactPage__wrapper">
				<Contact />

				{/* TODO SOCIAL MEDIA */}
				{/* TODO moze tutaj dajć najczęściej zadawane pytania */}
			</div>
		</div>
	);
};

export default ContactPage;
