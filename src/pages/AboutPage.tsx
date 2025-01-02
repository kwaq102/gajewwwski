import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Element, Link } from "react-scroll";

import HeaderPage from "../components/HederPage";
import Card from "../components/Card";
import { whyMeList } from "../ts/whyMeList";

// IMAGES
import webImg from "../img/lightbulb_w640.jpg";
import webImg2 from "../img/lightbulb_w760.jpg";
import coopImg from "../img/hands_w640.jpg";
import coopImg2 from "../img/hands_w700.jpg";
import learningImg from "../img/growing_w640.jpg";

// ICON
import Fire from "../SVG/Fire";
import Hands from "../SVG/Hands";
import Good from "../SVG/Good";
import Lightbulb from "../SVG/Lightbulb";
import Checked from "../SVG/Checked";
import Search from "../SVG/Search";
import Award from "../SVG/Award";
import Area from "../SVG/Area";
import MyValues from "../components/MyValues";
import CertificatesGallery from "../components/Galleries/CertificatesGallery";

const AboutPage = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 900);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const cards = whyMeList.map(item => (
		<Card
			title={item.title}
			description={item.description}
			img={item.img}
			imgAlt={item.imgAlt}
		/>
	));

	return (
		<>
			<Helmet>
				<title>O mnie - Tworzenie stron internetowych | gajewwwski.net</title>
				<meta
					name="description"
					content="Poznaj moją pasję do tworzenia stron internetowych – profesjonalizm, zaangażowanie i indywidualne podejście do każdego projektu."
				/>

				<meta
					property="og:title"
					content="O mnie - Tworzenie stron internetowych | gajewwwski.net"
				/>
				<meta
					property="og:description"
					content="Poznaj moją pasję do tworzenia stron internetowych – profesjonalizm, zaangażowanie i indywidualne podejście do każdego projektu."
				/>

				<meta property="og:url" content="https://gajewwwski.net/o-mnie" />
				<meta property="og:type" content="website" />
			</Helmet>
			<div className="aboutPage page">
				<HeaderPage
					title="O mnie"
					description="Freelancer zafascynowany programowaniem i tworzeniem stron internetowych. Dla mnie praca w tej dziedzinie to nie tylko zawód, lecz także się źródło ogromnej satysfakcji."
				/>

				<section className="about__wrapper">
					<div className="about__box">
						<div className="about__box__entry">
							<h2 className="about__heading heading-h2">
								Od pasji <span>do profesji</span>
							</h2>

							<div className="about__box__entry__wrapper">
								<div className="about__box__description">
									<p className="about__box__description__text">
										Przez lata z pasją poszerzam swoją wiedzę w dziedzinie
										programowania webowego i tworzenia stron internetowych
										poprzez udział w różnorodnych kursach. To nieustanne
										kształcenie pozwala mi być na bieżąco z najnowszymi trendami
										i technologiami.
									</p>
									<Link
										to="certyfikaty"
										smooth={true}
										duration={500}
										className="AboutPage__btn btn"
									>
										Moje certyfikaty
									</Link>
								</div>

								<div className="about__box__wrapper-img">
									<img
										src={learningImg}
										alt="Strzałka skierowana w górę na wykresie przedstawiającym postęp w samorozwoju zawodowym"
										className="about__box__img"
									/>
								</div>
							</div>
						</div>
					</div>

					<div className="about__box dark-bg">
						<div className="about__box__wrapper">
							<div className="about__box__wrapper__content">
								<h2 className="about__heading heading-h2">
									Twoje potrzeby <span>moje rozwiązania</span>
								</h2>
								<div className="about__box__description">
									<p className="about__box__description__text">
										Moim celem jest tworzenie technologii, które służą Tobie.
										Dzięki doświadczeniu w pracy z klientami potrafię dostosować
										rozwiązania do Twoich potrzeb, by osiągnąć zamierzone cele.”
									</p>
								</div>
							</div>
							<div className="about__box__wrapper__img">
								<img
									src={isMobile ? webImg : webImg2}
									alt="Włączona żarówka, symbolizująca pomysł i rozwiązanie problemu"
									className="about__box__img"
								/>
							</div>
						</div>
						<div className="about__box__wrapper">
							<div className="about__box__wrapper__content marginTop">
								<h2 className="about__heading heading-h2">
									Budowanie Partnerskich <span>Relacji</span>
								</h2>
								<div className="about__box__description">
									<p className="about__box__description__text">
										Jako freelancer doskonale współpracuję z małymi i średnimi
										firmami. Każdy projekt traktuję z największym szacunkiem
										wobec klienta, starając się pełnię zrozumieć jego potrzeby i
										oczekiwania. Moim celem jest budowanie partnerskich relacji
										opartych na wzajemnym zaufaniu oraz efektywnej komunikacji,
										aby wspólnie osiągnąć sukces w projektach i sprostać
										oczekiwaniom.
									</p>
								</div>
							</div>
							<div className="about__box__wrapper__img bottom-right-attached">
								<img
									src={isMobile ? coopImg : coopImg2}
									alt="Uścisk dłoni jako symbol porozumienia i skutecznej współpracy biznesowej"
									className="about__box__img"
								/>
							</div>
						</div>
					</div>

					<div className="about__box about__box__values">
						<h2 className="about__heading heading-h2">
							Wartości, <span>które wyznaję</span>
						</h2>
						<div className="about__values">
							<ul className="about__values__list">
								{/* TODO ten list item jest podobny jak komponent OfferElement - może uda się go połączyć */}

								<MyValues
									children={<Fire size="100" />}
									title="Pasja"
									description="Uwielbiam to, co robię, i to widać w każdym projekcie. Moja pasja do
								tworzenia stron internetowych sprawia, że zawsze daję z siebie 100%."
								/>

								<MyValues
									children={<Hands size="100" />}
									title="Partnerstwo"
									description="Współpraca ze mną to nie tylko realizacja projektu – to
								relacja oparta na wspólnym celu. Wierzę, że razem możemy osiągnąć więcej."
								/>

								<MyValues
									children={<Good size="100" />}
									title="Uczciwość"
									description="Zawsze stawiam na jasne zasady współpracy. Uważam, że
								szczerość i otwartość w komunikacji są kluczowe do budowania
								trwałych relacji z klientami."
								/>
								<MyValues
									children={<Award size="100" />}
									title="Szacunek"
									description="Każdy klient, niezależnie od wielkości projektu, jest dla mnie
								ważny. Słucham, szanuję wizje i potrzeby moich partnerów
								biznesowych, traktując ich z należytą uwagą."
								/>
								<MyValues
									children={<Lightbulb size="100" />}
									title="Nowoczesność"
									description="Śledzę najnowsze technologie i trendy w projektowaniu stron,
								aby oferować rozwiązania, które są nie tylko estetyczne, ale
								także skuteczne. Każda strona, którą tworzę, jest
								zoptymalizowana pod kątem użytkowników i dzisiejszych
								standardów internetowych."
								/>
								<MyValues
									children={<Checked size="100" />}
									title="Zaangażowanie"
									description="Podchodzę do każdego projektu z pełnym zaangażowaniem.Dbam o
								każdy szczegół, aby efekt końcowy spełniał oczekiwania
								klienta."
								/>
								<MyValues
									children={<Search size="100" />}
									title="Transparentność"
									description="Uważam, że jasne zasady współpracy i regularne informowanie
								klienta o postępach to podstawa zaufania. Dzięki temu masz
								pełen wgląd w proces powstawania Twojej strony."
								/>
								<MyValues
									children={<Area size="100" />}
									title="Elastyczność"
									description="Każdy klient jest inny, dlatego dopasowuję się do Twojego
								harmonogramu i indywidualnych potrzeb. Dzięki temu współpraca
								przebiega płynnie i komfortowo."
								/>
							</ul>
						</div>
					</div>

					<div className="about__box about__box__whyMe dark-bg">
						<h2 className="about__heading heading-h2">
							Dlaczego warto <span>ze mną współpracować</span>
						</h2>
						<p className="about__description">
							W świecie, gdzie każda firma walczy o uwagę w internecie,
							potrzebujesz kogoś, kto zrozumie Twoje potrzeby i stworzy stronę,
							która Cię wyróżni.
						</p>

						<div className="about__whyMe__card__wrapper">{cards}</div>
					</div>

					<Element name="certyfikaty">
						<div className="about__box">
							<h2 className="about__heading heading-h2">
								Moje <span>certyfikaty</span>
							</h2>
							{/* TODO przy certyfikatach moze podzielić ekran na pół i dodać jakis opis  */}
							<div className="about__box__certificates">
								<CertificatesGallery />
							</div>
						</div>
					</Element>
					<div>POMYŚLEĆ TU O JAKIEJŚ CALL TO ACTION</div>
				</section>
			</div>
		</>
	);
};

export default AboutPage;
