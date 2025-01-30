import { servicesList } from "../ts/servicesList";

const ServiceBox = () => {
	return (
		<>
			{servicesList.map((el, i) => (
				<div className="offer__service-box" key={i}>
					<div className="offer__service__img-box">
						<img src={el.img} className="offer__service__img" alt={el.imgAlt} />
					</div>
					<div className="offer__service__content">
						<h3 className="service__heading">
							{el.title}
							<span>{el.subTitle}</span>
						</h3>

						<ul className="service__list">
							{el.services.map((el, i) => (
								<li className="service__list__element" key={i}>
									{el}
								</li>
							))}
						</ul>
					</div>
				</div>
			))}
		</>
	);
};

export default ServiceBox;
