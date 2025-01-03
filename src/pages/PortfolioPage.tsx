import { Helmet } from "react-helmet-async";
import HeaderPage from "../components/HederPage";
import CardPortfolio from "../components/CardPortfolio";

// TODO ogarnąć portfolio
import img1 from "../img/portfolio/vertical/aaa.jpg";
import img2 from "../img/portfolio/vertical/bbb.jpg";
import { Fade } from "react-awesome-reveal";
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
					description=" Realizacje, które przekształcają wizję w rzeczywistość dzięki nowoczesnym technologiom i kreatywnemu podejściu. Każdy projekt to historia, która zaczyna się od Twojej wizji, a kończy na funkcjonalnej stronie internetowej, która wyróżnia się w sieci."
				/>
				<section className="portfolio__wrapper">
					<CardPortfolio
						title="gdansk-adwokat.pl"
						description="Strona internetowa"
						link="https://gdansk-adwokat.pl/"
						img={img1}
					/>
					<CardPortfolio
						title="artinka.pl"
						description="Strona internetowa"
						link="https://artinka.pl/"
						img={img2}
					/>
				</section>
			</div>
		</Fade>
	);
};

export default PortfolioPage;
