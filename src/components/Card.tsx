interface Props {
	title: string;
	description: string;
	img: string;
	imgAlt: string;
}

const WhyMeCard = ({ title, description, img, imgAlt }: Props) => {
	return (
		<div className="card">
			<div className="card__img__wrapper">
				<img src={img} alt={imgAlt} className="card__img" />
			</div>
			<div className="card__content">
				<h3 className="card__heading heading-h3">{title}</h3>
				<p className="card__descriptiopn">{description}</p>
			</div>
		</div>
	);
};

export default WhyMeCard;
