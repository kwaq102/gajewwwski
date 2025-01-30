import ButtonLink from "../components/ButtonLink";
import HeaderPage from "../components/HederPage";

const ErrorPage = () => {
	return (
		<div className="ErrorPage page">
			<HeaderPage title=" " description=" " />
			<div className="ErrorPage__wrapper">
				<p className="ErrorPage__text">Ups...</p>
				<p className="ErrorPage__text">Coś poszło nie tak.</p>
				<ButtonLink
					href="/"
					textBtn="Wróć do strony głównej"
					nameClass="ErrorPage__btn"
				/>
			</div>
		</div>
	);
};

export default ErrorPage;
