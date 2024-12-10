import { Fade } from "react-awesome-reveal";
import ButtonLink from "../components/ButtonLink";
import Particles from "../components/Particles";
import { useTypingEffect } from "../ts/typing";

const Header = () => {
	const text = [
		"Nowoczesne",
		"Profesjonalne",
		"Responsywne",
		"Strony internetowe",
	];

	const textToTyping = useTypingEffect(text, 50);

	return (
		<>
			<header className="header">
				<div className="box-left"></div>

				<div className="header-box">
					<div className="box-content">
						<Fade direction="up" cascade damping={0.1} triggerOnce>
							<h1 className="header-title">
								<span>Nowoczesne</span>
								<br />
								Strony internetowe <strong>gajewwwski.pl</strong>
							</h1>
							{/* TODO tekst do zmiany */}
							<p className="header-text">
								Strony internetowe tworzone z pasją! Wprowadź swoją markę do
								cyfrowego świata i odkryj potencjał online już dziś!
							</p>
							<p className="header-text header-typing">{textToTyping}</p>

							{/* TODO dodać adresy */}
							<div className="socials">
								<a href="#">
									<span className="fab fa-facebook-f"></span>
								</a>
								<a href="#">
									<span className="fab fa-linkedin-in"></span>
								</a>
								<a href="#">
									<span className="fab fa-github"></span>
								</a>
								<a href="#">
									<span className="fa-solid fa-link"></span>
								</a>
							</div>

							<div className="box-buttons">
								<Fade direction="up" cascade damping={0.2} triggerOnce>
									<ButtonLink textBtn="Skontaktuj się" href="#" />
									<ButtonLink textBtn="Portfolio" href="#" />
								</Fade>
							</div>
						</Fade>
					</div>
				</div>
				<Particles />
			</header>
		</>
	);
};

export default Header;
