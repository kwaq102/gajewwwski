interface Props {
	icon: string;
	title: string;
	description: string;
}

const OfferElement = ({ icon, title, description }: Props) => {
	return (
		<div className="offerElement">
			<span className={`offerElement__icon ${icon}`}></span>
			<h3 className="offerElement__title">{title}</h3>
			<p className="offerElement__description">{description}</p>
		</div>
	);
};

export default OfferElement;
