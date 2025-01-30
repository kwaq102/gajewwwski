import { Helmet } from "react-helmet-async";
import HeaderPage from "../components/HederPage";
import CardPortfolio from "../components/CardPortfolio";

import { Fade } from "react-awesome-reveal";

import firstPortfolioScreen from "../img/portfolio/vertical/firstScreen.jpg";
import secondPortfolioScreen from "../img/portfolio/vertical/secondScreen.jpg";
import thirdPortfolioScreen from "../img/portfolio/vertical/thirdVertical.jpg";

const PortfolioPage = () => {
	return (
		<Fade>
			<Helmet>
				<title>
					Portfolio - Tworzenie stron internetowych | gajewwwski.net
				</title>
				<meta
					name="description"
					content="Przejrzyj moje portfolio – projekty stron internetowych, administracja, rejestracja domen i wdrożenie SSL. Sprawdź, jak mogę pomóc w Twoim projekcie!"
				/>

				<meta
					property="og:title"
					content="Portfolio - Tworzenie stron internetowych | gajewwwski.net"
				/>
				<meta
					property="og:description"
					content="Przejrzyj moje portfolio – projekty stron internetowych, administracja, rejestracja domen i wdrożenie SSL. Sprawdź, jak mogę pomóc w Twoim projekcie!"
				/>

				<meta property="og:url" content="https://gajewwwski.net/portfolio" />
				<meta property="og:type" content="website" />
			</Helmet>
			<div className="PortfolioPage page">
				<HeaderPage
					title="Portfolio"
					description="Moje realizacje to połączenie nowoczesnych technologii i kreatywnego podejścia. Każdy projekt to proces, w którym przekształcam pomysły w estetyczne i funkcjonalne strony internetowe. Tworzę rozwiązania, które nie tylko robią wrażenie, ale także zapewniają wygodę użytkowania i niezawodne działanie."
				/>
				<section className="portfolio__wrapper">
					<h2 className="portfolio__heading heading-h2">
						Przykładowe <span>realizacje</span>
					</h2>

					<CardPortfolio
						title="artinka.pl"
						description="Strona internetowa"
						link="https://artinka.pl/"
						img={firstPortfolioScreen}
					/>

					<CardPortfolio
						title="gdansk-adwokat.pl"
						description="Strona internetowa"
						link="https://gdansk-adwokat.pl/"
						img={secondPortfolioScreen}
					/>

					<CardPortfolio
						title="dekarz.elblag.pl"
						description="Strona internetowa"
						link="https://dekarz.elblag.pl/"
						img={thirdPortfolioScreen}
					/>
				</section>
			</div>
		</Fade>
	);
};

export default PortfolioPage;
