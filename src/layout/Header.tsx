import { Fade } from "react-awesome-reveal";
import ButtonLink from "../components/ButtonLink";
import Particles from "../components/Particles";
import { useTypingEffect } from "../ts/typing";
import Socials from "../components/Socials";

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
								Strony internetowe <strong>gajewwwski.net</strong>
							</h1>
							<p className="header-text">
								Strony internetowe tworzone z pasją! Wprowadź swoją firmę do
								cyfrowego świata i odkryj potencjał online już dziś!
							</p>
							<p className="header-text header-typing">{textToTyping}</p>

							<div className="socials">
								<Socials />
							</div>

							<div className="box-buttons">
								<Fade direction="up" cascade damping={0.2} triggerOnce>
									<ButtonLink textBtn="Skontaktuj się" href="/kontakt" />
									<ButtonLink textBtn="Portfolio" href="/portfolio" />
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
