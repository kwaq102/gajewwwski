import { Helmet } from "react-helmet-async";
import HeaderPage from "../components/HederPage";
import Contact from "../layout/Contact";

const ContactPage = () => {
	return (
		<>
			<Helmet>
				<title>Kontakt - Skontaktuj się ze mną | gajewwwski.net</title>
				<meta
					name="description"
					content="Skontaktuj się ze mną telefonicznie, mailowo lub przez social media. Oferuję tworzenie stron internetowych i pełną obsługę. Formularz kontaktowy online!"
				/>
				<meta
					property="og:title"
					content="Kontakt - Skontaktuj się ze mną | gajewwwski.net"
				/>
				<meta
					property="og:description"
					content="Skontaktuj się ze mną telefonicznie, mailowo lub przez social media. Oferuję tworzenie stron internetowych i pełną obsługę. Formularz kontaktowy online!"
				/>

				<meta property="og:url" content="https://gajewwwski.net/kontakt" />
				<meta property="og:type" content="website" />
			</Helmet>
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
		</>
	);
};

export default ContactPage;
