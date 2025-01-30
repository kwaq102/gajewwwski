import { useNavigate } from "react-router-dom";
import HeadingSection from "../components/HeadingSection";
import { Fade } from "react-awesome-reveal";
import photo from "../img/image-advantages.png";

const MyAdvantages = () => {
	const navigate = useNavigate();
	const scrollToCertificates = () => {
		navigate("/o-mnie", { state: { scrollTo: "certificates" } });
	};

	return (
		<section className="myAdvantages">
			<HeadingSection
				title="Czym się wyróżniam?"
				nameClass="myAdvantages__title"
			/>

			<div className="myAdvantages__box-first">
				<ul className="myAdvantages__box-first__advantages advantages">
					<Fade cascade damping={0.2} triggerOnce direction="up">
						<li className="myAdvantages__box-first__advantage advantage-item">
							<span className="fa-solid fa-book"></span>
							<h4>Wysokie kwalifikacje</h4>
							<p>
								Ukończyłem wiele renomowanych kursów. Uczyłem się od
								najlepszych, co pozwala mi świadczyć usługi na najwyższym
								poziomie.
								<a
									className="advantage-item__certificates"
									onClick={scrollToCertificates}
								>
									Moje certyfikaty.
								</a>
							</p>
						</li>
						<li className="myAdvantages__box-first__advantage advantage-item">
							<span className="fa-solid fa-user-graduate"></span>
							<h4>Ciągłe Samodoskonalenie</h4>
							<p>
								Branża rozwija się bardzo szybko, a ja ciągle jestem głodny
								wiedzy. Stale rozwijam swoje umiejętności i śledzę najnowsze
								trendy.
							</p>
						</li>
						<li className="myAdvantages__box-first__advantage advantage-item">
							<span className="fa-solid fa-person-rays"></span>
							<h4>Indywidualne Podejście do Klienta</h4>
							<p>
								Każdy klient jest dla mnie wyjątkowy. Stawiam na indywidualne
								podejście, dostosowując się do unikalnych potrzeb i celów.
							</p>
						</li>
					</Fade>
				</ul>
			</div>
			<div className="myAdvantages__box-mid">
				<img src={photo} alt="photo" className="myAdvantages__box-mid__image" />
			</div>

			<div className="myAdvantages__box-second">
				<ul className="myAdvantages__box-second__advantages advantages">
					<Fade cascade damping={0.2} delay={300} triggerOnce direction="down">
						<li className="myAdvantages__box-second__advantage advantage-item">
							<span className="fa-solid fa-star"></span>
							<h4>Najnowsze standardy</h4>
							<p>
								Stosuję najnowsze technologie i standardy branżowe, zapewniając
								innowacyjne i efektywne rozwiązania, które spełniają wysokie
								wymagania współczesnego internetu.
							</p>
						</li>
						<li className="myAdvantages__box-second__advantage advantage-item">
							<span className="fa-regular fa-handshake"></span>
							<h4>Uczciwość</h4>
							<p>
								Rzetelność i transparentność są fundamentem współpracy. Zawsze
								możesz liczyć na szczerość i profesjonalizm w każdym aspekcie
								naszej pracy.
							</p>
						</li>
						<li className="myAdvantages__box-second__advantage advantage-item">
							<span className="fa-solid fa-people-line"></span>
							<h4> Dobry kontakt i luźna atmosfera</h4>
							<p>
								Dbam o przyjazną atmosferę współpracy. Wierzę, że dobra
								komunikacja i luźna atmosfera sprzyjają efektywnym rozwiązaniom.
							</p>
						</li>
					</Fade>
				</ul>
			</div>
		</section>
	);
};

export default MyAdvantages;
