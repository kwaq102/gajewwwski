import { Link } from "react-router-dom";
import HeadingSection from "../components/HeadingSection";
import { scrollToTop } from "../ts/scrollTop";

const About = () => {
	return (
		<section className="about">
			<div className="about__content">
				<HeadingSection nameClass="about__title" title="O mnie" />
				<p className="about__content__text">
					Cześć! Nazywam się Kamil i jestem pasjonatem tworzenia stron
					internetowych. Każdy projekt traktuję jak wyjątkową podróż (prawie
					taką jak do Mordoru ;)), do której chcę Cię zaprosić! Łączę
					doświadczenie, zaangażowanie i entuzjazm, by pomóc Twojej marce
					zaistnieć w cyfrowym świecie. Sprawdź, jak razem możemy osiągnąć nowe
					cele!
				</p>

				<div className="about__content__links">
					<div className="about__content__link-box">
						<div className="about__content__link-box_icon">
							<span className="fa-solid fa-envelopes-bulk"></span>
						</div>
						<div className="about__content__link-box_content">
							<Link
								to="/oferta"
								className="about__content__link-box_title"
								onClick={scrollToTop}
							>
								Sprawdź ofertę
							</Link>
							<p className="about__content__link-box_text">
								Oferuję kompleksowe usługi, które pomogą Ci zbudować silną i
								profesjonalną obecność online, a także skutecznie rozwijać Twój
								biznes w dynamicznie zmieniającym się cyfrowym świecie.
							</p>
						</div>
					</div>
					<div className="about__content__link-box">
						<div className="about__content__link-box_icon">
							<span className="fa-solid fa-file-code"></span>
						</div>
						<div className="about__content__link-box_content">
							<Link
								to="/portfolio"
								className="about__content__link-box_title"
								onClick={scrollToTop}
							>
								Moje projekty
							</Link>
							<p className="about__content__link-box_text">
								To efekt pasji, wytrwałości i zaangażowania. Znajdziesz tu
								kreatywne rozwiązania, które pozwoliły mi rozwijać umiejętności
								i wspierać cele moich klientów.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="about__image"></div>
		</section>
	);
};

export default About;
