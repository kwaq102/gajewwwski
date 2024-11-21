import ButtonLink from "../components/ButtonLink";
import HeaderPage from "../components/HederPage";
import ServiceBox from "../components/ServiceBox";
import Timeline from "../components/Timeline/TimeLine";
import CallToAction from "../layout/CallToAction";

// https://tomapps.pl/oferta/
// https://daweb.studio/oferta/
// https://www.lavora.pl/oferta/
// https://darksite.app/oferta/strony-internetowe/
// https://promostrona.pl/nasza-oferta/
// https://www.unity-t.pl/wp-content/uploads/2021/06/Group-23.png

// https://pixabay.com/pl/photos/dubai-%C5%9Br%C3%B3dmie%C5%9Bcie-burd%C5%BCi-kalifa-4598108/

const OfferPage = () => {
	return (
		<div className="OfferPage page">
			<HeaderPage
				title="Oferta"
				description="Nowoczesne, responsywne strony internetowe, zgodne z najlepszymi standardami. Kompleksowa obsługa – od projektowania, przez administrację, po aktualizacje i zabezpieczenia. Właściwe treści SEO i optymalizacja grafik zapewnią skuteczność w sieci."
				// photo={aboutImg}
			/>

			<section className="offer__wrapper">
				{/* Projektuję nowoczesne, responsywne strony internetowe zgodne z
				najlepszymi standardami. Oferuję pełną administrację i kompleksową
				optymalizację SEO, by Twoja strona była szybka, bezpieczna i dobrze
				widoczna w sieci. Wszystko to dostosowane do Twoich indywidualnych
				potrzeb. */}

				<div className="offer__box">
					<div className="offer__services-description">
						<h2 className="offer__heading heading-h2">
							Sprawdź <span>jak mogę Ci pomóc!</span>
						</h2>
						<p className="offer__text">
							Zajmuję się tworzeniem stron internetowych, pisząc własny kod lub
							wykorzystując systemy CMS. Pomagam w wyborze domeny, hostingu oraz
							wdrażam stronę od A do Z. Dbam o SEO na każdym etapie, by Twoja
							strona była widoczna w wyszukiwarkach. Oferuję też wsparcie przy
							późniejszych zmianach, aktualizacji wtyczek oraz zabezpieczeniu
							witryny. Dodatkowo tworzę treści zgodne z SEO i optymalizuję
							grafiki, żeby Twoja strona była szybka i atrakcyjna.
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
				description="Dzięki moim usługom możesz być pewny, że Twoja strona internetowa
				będzie nie tylko estetyczna, ale również funkcjonalna i widoczna w
				sieci."
			/>
		</div>
	);
};

export default OfferPage;
