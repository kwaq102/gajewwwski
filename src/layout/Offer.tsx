import React from "react";

import OfferElement from "../components/OfferElement";
import { offerList } from "../ts/offerList";
import HeadingSection from "../components/HeadingSection";
import { Fade } from "react-awesome-reveal";

const Offer = () => {
	const offer = offerList.map(el => (
		<OfferElement
			icon={el.iconClass}
			title={el.title}
			description={el.description}
		/>
	));

	return (
		<section className="offer">
			<HeadingSection title="Oferta" nameClass="offer__title" />
			<Fade cascade damping={0.1} triggerOnce>
				{offer}
			</Fade>
		</section>
	);
};

export default Offer;
