import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store/store";

import Navigation from "./layout/Navigation";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import Footer from "./layout/Footer";
import OfferPage from "./pages/OfferPage";
import ContactPage from "./pages/ContactPage";
import PortfolioPage from "./pages/PortfolioPage";
import ErrorPage from "./pages/ErrorPage";
import PolicyPage from "./pages/PolicyPage";
import ArrowTop from "./components/ArrowTop";
import { hiddenMenu } from "./redux/features/menuSlice";

const App = () => {
	const menu = useSelector((state: RootState) => state.menu.value);
	const dispatch = useDispatch();

	return (
		<div
			className="wrapperContext"
			onClick={e => {
				const target = e.target as HTMLElement;
				if (menu) {
					console.log(target.classList.contains("show-nav"));

					if (!target.classList.contains("show-nav")) {
						dispatch(hiddenMenu());
					}
				}
			}}
		>
			<ArrowTop />
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/o-mnie" element={<AboutPage />} />
				<Route path="/oferta" element={<OfferPage />} />
				<Route path="/portfolio" element={<PortfolioPage />} />
				<Route path="/kontakt" element={<ContactPage />} />
				<Route path="/polityka-prywatnosci" element={<PolicyPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
