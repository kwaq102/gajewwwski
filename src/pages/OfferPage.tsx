import { Helmet } from "react-helmet-async";
import ButtonLink from "../components/ButtonLink";
import HeaderPage from "../components/HederPage";
import ServiceBox from "../components/ServiceBox";
import Timeline from "../components/Timeline/TimeLine";
import CallToAction from "../layout/CallToAction";
import { Fade } from "react-awesome-reveal";

const OfferPage = () => {
	return (
		<Fade>
			<Helmet>
				<title>Oferta - Usługi Webowe | gajewwwski.net</title>
				<meta
					name="description"
					content="Odkryj moją ofertę – tworzenie stron internetowych, administracja i SEO. Zrealizuję Twoją wizję online. Sprawdź, jak mogę Ci pomóc!"
				/>
				<meta
					property="og:title"
					content="Oferta - Usługi Webowe | gajewwwski.net"
				/>
				<meta
					property="og:description"
					content="Odkryj moją ofertę – tworzenie stron internetowych, administracja i SEO. Zrealizuję Twoją wizję online. Sprawdź, jak mogę Ci pomóc!"
				/>

				<meta property="og:url" content="https://gajewwwski.net/oferta" />
				<meta property="og:type" content="website" />
			</Helmet>
			<div className="OfferPage page">
				<HeaderPage
					title="Oferta"
					description="Nowoczesne, responsywne strony internetowe zgodne z najlepszymi standardami. Oferuję kompleksową obsługę – od pomysłu po administrowanie. Zapewniam optymalizację SEO oraz dopasowany i atrakcyjny design."
				/>

				<section className="offer__wrapper">
					<div className="offer__box">
						<div className="offer__services-description">
							<h2 className="offer__heading heading-h2">
								Sprawdź <span>jak mogę Ci pomóc!</span>
							</h2>
							<p className="offer__text">
								Tworzę nowoczesne, responsywne strony internetowe – zarówno od
								podstaw, pisząc własny kod, jak i z wykorzystaniem systemów CMS.
								Pomagam w wyborze domeny i hostingu oraz wdrażam stronę od A do
								Z. Dbam o SEO na każdym etapie, aby Twoja strona była widoczna w
								wyszukiwarkach. Oferuję także wsparcie przy aktualizacjach,
								wtyczkach oraz zabezpieczeniach. Dodatkowo tworzę treści SEO i
								optymalizuję grafiki, by Twoja strona była szybka i atrakcyjna.
							</p>
							<ButtonLink
								textBtn="Zapytaj o szczegóły"
								href="/kontakt"
								nameClass="offer__btn"
							/>
						</div>

						<div className="offer__services-box">
							<ServiceBox />
						</div>
					</div>
				</section>

				<section className="offer__cooperation">
					<h2 className="offer__heading heading-h2">
						Etapy współpracy <span>krok po kroku</span>
					</h2>
					<Timeline />
				</section>

				<CallToAction
					title="Wspólnie stworzymy coś wyjątkowego!"
					description="Dzięki moim usługom zyskasz stronę, która nie tylko przyciąga, ale także działa sprawnie i wyróżnia się w Internecie. Razem stworzymy coś, co pomoże Ci osiągnąć sukces!"
				/>
			</div>
		</Fade>
	);
};

export default OfferPage;
