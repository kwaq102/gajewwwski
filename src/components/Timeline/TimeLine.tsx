import { Fade } from "react-awesome-reveal";
import TimelineElement from "./TimelineElement";

const Timeline = () => {
	return (
		<div className="timeline">
			<Fade
				direction="up"
				cascade
				damping={0.1}
				triggerOnce
				className="timelineElement"
			>
				<TimelineElement
					title="Kontakt, analiza potrzeb"
					description="Najpierw siadamy do rozmowy – ustalamy, co jest potrzebne, czego oczekujesz, kto będzie korzystał z Twojej strony i jakie funkcje będą dla nich najważniejsze."
				/>
				<TimelineElement
					title="Podpisanie umowy"
					description="Sformalizowanie współpracy poprzez określenie zakresu projektu, harmonogramu realizacji, warunków finansowych i liczby przewidzianych poprawek."
				/>
				<TimelineElement
					title="Tworzenie"
					description="To tutaj zaczyna się magia! Projektujemy, kodujemy, ustawiamy funkcje – krok po kroku Twoja strona nabiera kształtu i życia."
				/>
				<TimelineElement
					title="Naniesienie poprawek"
					description="Przyglądasz się gotowemu projektowi, a jeśli coś nie gra, wprowadzamy zmiany. Chcemy, żeby wszystko było idealnie i po Twojej myśli."
				/>
				<TimelineElement
					title="Umieszczenie projektu w internecie"
					description="Czas wypuścić stronę w świat! Wrzucona na serwer, podpięta pod domenę – gotowa, żeby działać dla Ciebie i Twoich klientów."
				/>

				<TimelineElement
					title="Administracja"
					description="Strona już działa, ale to nie koniec – zajmujemy się aktualizacjami, wsparciem technicznym i dopilnowujemy, żeby wszystko hulało bez problemów. 😊"
				/>
			</Fade>
		</div>
	);
};

export default Timeline;
