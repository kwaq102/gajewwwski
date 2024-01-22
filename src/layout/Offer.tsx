import React from "react";

import OfferElement from "../components/OfferElement";
import { offerList } from "../ts/offerList";

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
			{/* Tutaj jakiś nagłówiek h2 w osobnym komponencie ale zastanowić się bo nie wiadomo jak bedzie lepiej dla seo */}
			{/* moje usługi usługi oferta w ofercie w czym mogę Ci pomóc */}
			<h2 className="offer__title">Oferta</h2>
			{offer}
		</section>
	);
};

export default Offer;
