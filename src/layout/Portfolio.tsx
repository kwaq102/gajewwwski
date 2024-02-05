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
import example1 from "../img/portfolio/waldek.jpg";
import example2 from "../img/portfolio/adRespect.jpg";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

const Portfolio = () => {
	const [firstAnimation, setFirstAnimation] = useState(false);
	const [secondAnimation, setSecondAnimation] = useState(false);
	const [thirdAnimation, setThirdAnimation] = useState(false);
	const [fourthAnimation, setFourthAnimation] = useState(false);
	const [fifthAnimation, setFifthAnimation] = useState(false);
	const [sixthAnimation, setSixthAnimation] = useState(false);

	return (
		<section className="portfolio">
			<div className="portfolio__box">
				<Fade cascade damping={0.3} triggerOnce direction="left">
					<div className="portfolio__content">
						<HeadingSection
							title="Moje realizacje"
							nameClass="portfolio__title"
						/>

						<h4 className="portfolio__content__title">
							Każdy Projekt <span>jest szansą do zmian na lepsze</span>
						</h4>

						<p className="portfolio__content__text">
							Tworzenie stron internetowych to jak wejście na fascynującą
							ścieżkę, której zakres możliwości pozostaje otwarty. Każdy projekt
							traktuję z pasją i zaangażowaniem, starając się w pełni zrozumieć
							potrzeby klienta oraz sprostać jego oczekiwaniom podczas
							realizacji. Wierzę, że każda strona internetowa jest unikalnym
							doświadczeniem, gotowym zaprowadzić nas daleko w świat cyfrowej
							kreacji.
						</p>
					</div>
					<div className="portfolio__links">
						<Link
							to="https://artinka.pl"
							className={`css-1c2fuzs portfolio__link img-box first ${
								firstAnimation ? "animateOn" : "animateOff"
							}`}
							onMouseEnter={() => setFirstAnimation(true)}
							onMouseLeave={() => setFirstAnimation(false)}
						>
							<img
								src={artinka}
								alt="Screen ze strony artinka.pl"
								className="portfolio__link-image artinka"
							/>
							<p className="portfolio__link-text">
								Strona www dla artystki od malowania ciała{" "}
								<span>artinka.pl</span>
							</p>
							<button className="portfolio__play-btn">
								<span className="fa-regular fa-circle-play"></span>
							</button>
						</Link>
						<Link
							onMouseEnter={() => setSecondAnimation(true)}
							onMouseLeave={() => setSecondAnimation(false)}
							to="http://gdansk-adwokat.pl"
							className={`css-1c2fuzs portfolio__link img-box second ${
								secondAnimation ? "animateOn" : "animateOff"
							}`}
						>
							<img
								src={kris}
								alt="screen ze strony gdansk-adwokat.pl"
								className="portfolio__link-image kris"
							/>
							<p className="portfolio__link-text">
								Strona www dla kancelarii adwokackiej{" "}
								<span>gdansk-adwokat.pl</span>
							</p>
							<button className="portfolio__play-btn">
								<span className="fa-regular fa-circle-play"></span>
							</button>
						</Link>
						<Link
							to="https://kwaq102.github.io/agency-travel-story/"
							className={`css-1c2fuzs portfolio__link img-box third ${
								thirdAnimation ? "animateOn" : "animateOff"
							}`}
							onMouseEnter={() => setThirdAnimation(true)}
							onMouseLeave={() => setThirdAnimation(false)}
						>
							<img
								src={travel}
								alt="screen z projekty strony travel story umieszczonego na github.com"
								className="portfolio__link-image assistant"
							/>
							<p className="portfolio__link-text">
								Projekt strony biura turystyczno-pielgrzymkowego
							</p>
							<button className="portfolio__play-btn">
								<span className="fa-regular fa-circle-play"></span>
							</button>
						</Link>
						<Link
							to="#"
							className={`css-1c2fuzs portfolio__link img-box fourth ${
								fourthAnimation ? "animateOn" : "animateOff"
							}`}
							onMouseEnter={() => setFourthAnimation(true)}
							onMouseLeave={() => setFourthAnimation(false)}
						>
							<img
								src={assistant}
								alt=""
								className="portfolio__link-image travel"
							/>
							<p className="portfolio__link-text">
								Strona www dla wirtualnej assystentki i wsparcie prowadzenia
								działalności.
							</p>
							<button className="portfolio__play-btn">
								<span className="fa-regular fa-circle-play"></span>
							</button>
						</Link>

						{/* ADDITIONAL 2 EXAMPLE LINKS */}

						<Link
							to="#"
							className={`css-1c2fuzs portfolio__link img-box fifth ${
								fifthAnimation ? "animateOn" : "animateOff"
							}`}
							onMouseEnter={() => setFifthAnimation(true)}
							onMouseLeave={() => setFifthAnimation(false)}
						>
							<img
								src={example1}
								alt=""
								className="portfolio__link-image waldek"
							/>
							<p className="portfolio__link-text">
								Strona www dla firmy transportowej.
							</p>
							<button className="portfolio__play-btn">
								<span className="fa-regular fa-circle-play"></span>
							</button>
						</Link>

						<Link
							to="#"
							className={`css-1c2fuzs portfolio__link img-box sixth ${
								sixthAnimation ? "animateOn" : "animateOff"
							}`}
							onMouseEnter={() => setSixthAnimation(true)}
							onMouseLeave={() => setSixthAnimation(false)}
						>
							<img
								src={example2}
								alt=""
								className="portfolio__link-image adrespect"
							/>
							<p className="portfolio__link-text">
								Strona www w ramach rekrutacji.
							</p>
							<button className="portfolio__play-btn">
								<span className="fa-regular fa-circle-play"></span>
							</button>
						</Link>
					</div>
				</Fade>
			</div>
		</section>
	);
};

export default Portfolio;
