import ButtonLink from "../components/ButtonLink";

interface Props {
	title: string;
	description: string;
}

const CallToAction = ({ title, description }: Props) => {
	return (
		<section className="call-to-action">
			<div className="call-to-action__box">
				<h3 className="call-to-action__title">{title}</h3>
				<p className="call-to-action__text">{description}</p>
				<ButtonLink
					href="/kontakt"
					textBtn="Skontaktuj się!"
					nameClass="call-to-action__button"
				/>
			</div>
		</section>
	);
};

export default CallToAction;
