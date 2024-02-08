import About from "./layout/About";
import CallToAction from "./layout/CallToAction";
import Header from "./layout/Header";
import Motto from "./layout/Motto";
import MyAdvantages from "./layout/MyAdvantages";
import MyAdvantagesFooter from "./layout/MyAdvantagesFooter";
import Navigation from "./layout/Navigation";
import Offer from "./layout/Offer";
import Portfolio from "./layout/Portfolio";

function App() {
	return (
		<>
			<Navigation />
			<Header />
			<main className="main">
				<Motto />
				<About />
				<Offer />
				<MyAdvantages />
				<MyAdvantagesFooter />
				<Portfolio />
				<CallToAction />
				<div className="app-div">KAmil</div>
			</main>
		</>
	);
}

export default App;
