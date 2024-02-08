import React from "react";
import ButtonLink from "../components/ButtonLink";

const CallToAction = () => {
	return (
		<section className="call-to-action">
			<div className="call-to-action__box">
				<h5 className="call-to-action__title">
					Twoja przygoda zaczyna się tutaj!
				</h5>
				<p className="call-to-action__text">
					Miło mi, że zainteresowałeś się moją stroną! To tylko wierzchołek góry
					lodowej, bo najważniejsze jest to, że teraz Ty możesz stworzyć swoją
					własną wyjątkową stronę internetową! Niech Twoja historia zacznie się
					właśnie tutaj. Napisz do mnie już dziś, abyśmy mogli razem zrealizować
					Twoje pomysły i stworzyć coś wyjątkowego!
				</p>
				<ButtonLink
					href="/contact"
					textBtn="Skontaktuj się!"
					nameClass="call-to-action__button"
				/>
			</div>
		</section>
	);
};

export default CallToAction;
