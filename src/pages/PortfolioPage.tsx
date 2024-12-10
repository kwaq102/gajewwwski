// https://promostrona.pl/portfolio/
// https://www.lavora.pl/realizacje/
// https://daweb.studio/portfolio/
// https://tomapps.pl/portfolio/
// https://demo.templatemonster.com/pl/demo/301213.html

import { Link } from "react-router-dom";
import HeaderPage from "../components/HederPage";
import LinkIcon from "../SVG/LinkIcon";
import CardPortfolio from "../components/CardPortfolio";

import img1 from "../img/portfolio/vertical/aaa.jpg";
import img2 from "../img/portfolio/vertical/bbb.jpg";

const PortfolioPage = () => {
	return (
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
	);
};

export default PortfolioPage;
