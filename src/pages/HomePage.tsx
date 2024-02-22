import React from "react";

import Header from "../layout/Header";
import About from "../layout/About";
import CallToAction from "../layout/CallToAction";
import Contact from "../layout/Contact";
import Motto from "../layout/Motto";
import MyAdvantages from "../layout/MyAdvantages";
import MyAdvantagesFooter from "../layout/MyAdvantagesFooter";
import Offer from "../layout/Offer";
import Portfolio from "../layout/Portfolio";

const HomePage = () => {
	return (
		<main className="main">
			<Header />
			<Motto />
			<About />
			<Offer />
			<MyAdvantages />
			<MyAdvantagesFooter />
			<Portfolio />
			<CallToAction />
			<Contact />
		</main>
	);
};

export default HomePage;
