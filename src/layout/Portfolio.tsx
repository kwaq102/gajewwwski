import { Link, NavLink } from "react-router-dom";
import HeadingSection from "../components/HeadingSection";

import artinka from "../img/portfolio/artinka.jpg";
import artinka2 from "../img/portfolio/artinka2.jpg";
import kris from "../img/portfolio/kris.jpg";
import kris2 from "../img/portfolio/kris2.jpg";
import travel from "../img/portfolio/travel.jpg";
import travel2 from "../img/portfolio/travel2.jpg";
import assistant from "../img/portfolio/assistant.jpg";
import assistant2 from "../img/portfolio/assistant2.jpg";

const Portfolio = () => {
	return (
		<section className="portfolio">
			<HeadingSection title="Moje realizacje" nameClass="portfolio__title" />

			<div className="portfolio__box">
				<div className="portfolio__content">
					<h4 className="portfolio__content__title">
						Każdy Projekt <span>jest szansą do zmian na lepsze</span>
					</h4>
					{/* <h4 className="portfolio__content__title">
						Każdy Projekt <span>ma potencjał do pozytywnych zmian</span>
					</h4> */}
					<p className="portfolio__content__text">
						Tworzenie stron internetowych to jak wejście na fascynującą ścieżkę,
						której zakres możliwości pozostaje otwarty. Każdy projekt traktuję z
						pasją i zaangażowaniem, starając się w pełni zrozumieć potrzeby
						klienta oraz sprostać jego oczekiwaniom podczas realizacji. Wierzę,
						że każda strona internetowa jest unikalnym doświadczeniem, gotowym
						zaprowadzić nas daleko w świat cyfrowej kreacji.
					</p>
				</div>

				<div className="portfolio__links">
					<Link to="#" className="portfolio__link img-box">
						<img
							src={artinka}
							alt=""
							className="portfolio__link-image artinka"
						/>
						<p className="portfolio__link-text">
							Strona www dla artystki od malowania ciała <span>artinka.pl</span>
						</p>
					</Link>
					<Link to="#" className="portfolio__link img-box">
						<img src={kris} alt="" className="portfolio__link-image kris" />
						<p className="portfolio__link-text">
							Strona www dla kancelarii adwokackiej{" "}
							<span>gdansk-adwokat.pl</span>
						</p>
					</Link>
					<Link to="#" className="portfolio__link img-box">
						<img
							src={travel}
							alt=""
							className="portfolio__link-image assistant"
						/>
						<p className="portfolio__link-text">
							Projekt strony biura turystyczno-pielgrzymkowego
						</p>
					</Link>
					<Link to="#" className="portfolio__link img-box">
						<img
							src={assistant}
							alt=""
							className="portfolio__link-image travel"
						/>
						<p className="portfolio__link-text">
							Strona www dla wirtualnej assystentki i wsparcie prowadzenia
							działalności.
						</p>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
