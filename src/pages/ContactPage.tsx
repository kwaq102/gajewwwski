import { Helmet } from "react-helmet-async";
import HeaderPage from "../components/HederPage";
import Contact from "../layout/Contact";
import { Fade } from "react-awesome-reveal";

const ContactPage = () => {
	return (
		<Fade>
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
					description="Nie ma głupich pytań – są tylko nowe możliwości! Skontaktuj się ze mną, a wspólnie znajdziemy najlepsze rozwiązanie dla Twojego projektu. Wszystko zaczyna się od nawiązania kontaktu."
				/>
				<div className="ContactPage__wrapper">
					<Contact />
				</div>
			</div>
		</Fade>
	);
};

export default ContactPage;
