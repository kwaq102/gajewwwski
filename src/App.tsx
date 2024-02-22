import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./layout/Navigation";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import Footer from "./layout/Footer";
import OfferPage from "./pages/OfferPage";
import ContactPage from "./pages/ContactPage";
import PortfolioPage from "./pages/PortfolioPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/o-mnie" element={<AboutPage />} />
				<Route path="/oferta" element={<OfferPage />} />
				<Route path="/portfolio" element={<PortfolioPage />} />
				<Route path="/kontakt" element={<ContactPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
