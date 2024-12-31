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
			<CallToAction
				title="Twoja przygoda zaczyna się tutaj!"
				description="Miło mi, że zainteresowałeś się moją stroną! To tylko wierzchołek góry
				lodowej, bo najważniejsze jest to, że teraz Ty możesz stworzyć swoją
				własną wyjątkową stronę internetową! Niech Twoja historia zacznie się
				właśnie tutaj. Napisz do mnie już dziś, abyśmy mogli razem zrealizować
				Twoje pomysły i stworzyć coś wyjątkowego!"
			/>
			<Contact />
		</main>
	);
};

export default HomePage;
