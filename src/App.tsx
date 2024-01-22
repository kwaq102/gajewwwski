import "./App.css";
import Header from "./layout/Header";
import Motto from "./layout/Motto";
import Navigation from "./layout/Navigation";
import Offer from "./layout/Offer";

function App() {
	return (
		<div className="App">
			<Navigation />
			<Header />
			<Motto />
			<Offer />
			<div className="app-div">KAmil</div>
			<div className="app-div">KAmil</div>
			<div className="app-div">KAmil</div>
			<div className="app-div">KAmil</div>
			<div className="app-div">KAmil</div>
		</div>
	);
}

export default App;
