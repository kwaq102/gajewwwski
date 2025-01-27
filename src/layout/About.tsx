import { Link, NavLink } from "react-router-dom";
import HeadingSection from "../components/HeadingSection";
import { scrollToTop } from "../ts/scrollTop";

const About = () => {
	return (
		<section className="about">
			<div className="about__content">
				<HeadingSection nameClass="about__title" title="O mnie" />
				<p className="about__content__text">
					Witaj na mojej stronie! Jestem Kamil - entuzjasta nowych technologii.
					Jestem freelancerem, a moja pasja to tworznie stron internetowych.
					Każdy projekt traktuję jak wyjątkową podróż (prawie taką jak do
					Mordoru ;)), do której chcę Cię zaprosić! Moim celem jest pomoc w
					rozwoju Twojej marki i zbudowanie lepszej pozycji w cyfrowym świecie.
					Do każdej realizacji podchodzę z taką samą fascynacją i zaangażowaniem
					jakby to był mój pierwszy raz, lecz z co raz większym doświadczeniem.
					Dowiedz się jak możemy osiągać nowe cele!
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
								Zapewniając niezawodne usługi, pomagam Ci zaznaczyć swoją
								obecność w nieograniczonym świecie cyfrowym.
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
								Moje portfolio to zbiór efektywnych i kreatywnych rozwiązań,
								odzwierciedlających moje zróżnicowane doświadczenie.
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* Te zdjęcie może takie po skosie jak w aktywwwni */}
			<div className="about__image"></div>
		</section>
	);
};

export default About;
