import { Helmet } from "react-helmet-async";
import Header from "../layout/Header";
import About from "../layout/About";
import CallToAction from "../layout/CallToAction";
import Contact from "../layout/Contact";
import Motto from "../layout/Motto";
import MyAdvantages from "../layout/MyAdvantages";
import MyAdvantagesFooter from "../layout/MyAdvantagesFooter";
import Offer from "../layout/Offer";
import Portfolio from "../layout/Portfolio";
import { Fade } from "react-awesome-reveal";

const HomePage = () => {
	return (
		<Fade>
			<Helmet>
				<title>Tworzenie Stron Internetowych | gajewwwski.net</title>
				<meta
					name="description"
					content="Tworzę nowoczesne strony internetowe dopasowane do Twoich potrzeb. Profesjonalne usługi web developera, administracja stron, SEO i hosting – wszystko w jednym miejscu!"
				/>
				<meta
					property="og:title"
					content="Tworzenie Stron Internetowych | gajewwwski.net"
				/>
				<meta
					property="og:description"
					content="Tworzę nowoczesne strony internetowe dopasowane do Twoich potrzeb. Profesjonalne usługi web developera, administracja stron, SEO i hosting – wszystko w jednym miejscu!"
				/>
				{/* TODO poszukać jakiegoś obrazka pewnie z logo */}
				{/* <meta property="og:image" content="https://gajewwwski.net/path/to/your-image.jpg" /> */}
				<meta property="og:url" content="https://gajewwwski.net" />
				<meta property="og:type" content="website" />
			</Helmet>
			<Header />

			<main className="main">
				<Motto />
				<About />
				<Offer />
				<MyAdvantages />
				<MyAdvantagesFooter />
				<Portfolio />
				<CallToAction
					title="Twoja przygoda zaczyna się tutaj!"
					description="Miło mi, że zainteresowałeś się moją stroną! To tylko wierzchołek góry
				lodowej, bo najważniejsze jest to, że teraz Ty możesz stworzyć swoją
				własną wyjątkową stronę internetową! Niech Twoja historia zacznie się
				właśnie tutaj. Napisz do mnie już dziś, abyśmy mogli razem zrealizować
				Twoje pomysły i stworzyć coś wyjątkowego!"
				/>
				<Contact />
			</main>
		</Fade>
	);
};

export default HomePage;
