import Header from "./layout/Header";
import Motto from "./layout/Motto";
import Navigation from "./layout/Navigation";
import Offer from "./layout/Offer";

function App() {
	return (
		<>
			<Navigation />
			<Header />
			<main className="main">
				<Motto />
				<Offer />
				<div className="app-div">KAmil</div>
				<div className="app-div">KAmil</div>
				<div className="app-div">KAmil</div>
				<div className="app-div">KAmil</div>
				<div className="app-div">KAmil</div>
			</main>
		</>
	);
}

export default App;
