import HeaderPage from "../components/HederPage";

const PolicyPage = () => {
	return (
		<div className="PolicyPage page">
			<HeaderPage title="Polityka Prywatności" description="" />

			<div className="PolicyPage__wrapper">
				<div className="PolicyPage__box">
					<h2 className="PolicyPage__box__heading">Infromacje ogólne</h2>
					<p className="PolicyPage__box__description">
						Niniejsza Polityka Prywatności określa zasady przetwarzania i
						ochrony danych osobowych użytkowników strony internetowej
						gajewwwski.net (dalej: "Strona"). Administratorem danych osobowych
						jest Kamil Gajewski, z siedzibą pod adresem ul. płk. Stanisława
						Dąbka 104, e-mail: gajewwwski@gmail.com.
					</p>
				</div>

				<div className="PolicyPage__box">
					<h2 className="PolicyPage__box__heading">
						Zakres i Cel Przetwarzania Danych
					</h2>
					<p className="PolicyPage__box__description">
						Przetwarzamy dane osobowe użytkowników w celu: realizacji usług
						świadczonych za pośrednictwem Strony, obsługi zapytań kontaktowych,
						prowadzenia statystyk i analizy ruchu na Stronie, wysyłania
						<br />
						Zakres zbieranych danych obejmuje m.in.: imię, nazwisko, nazwa
						firmy, adres e-mail, numer telefonu, adres IP, oraz dane zapisane w
						plikach cookies.
					</p>
				</div>
				<div className="PolicyPage__box">
					<h2 className="PolicyPage__box__heading">
						Podstawa Prawna Przetwarzania
					</h2>
					<p className="PolicyPage__box__description">
						Przetwarzanie danych odbywa się zgodnie z RODO (Rozporządzenie
						Parlamentu Europejskiego i Rady (UE) 2016/679), a podstawy prawne
						obejmują: wykonanie umowy (art. 6 ust. 1 lit. b RODO), obowiązki
						prawne administratora (art. 6 ust. 1 lit. c RODO), uzasadniony
						interes administratora (art. 6 ust. 1 lit. f RODO), zgodę
						użytkownika (art. 6 ust. 1 lit. a RODO).
					</p>
				</div>
				<div className="PolicyPage__box">
					<h2 className="PolicyPage__box__heading">Pliki Cookies</h2>
					<p className="PolicyPage__box__description">
						Strona wykorzystuje pliki cookies w celach statystycznych oraz do
						zapewnienia prawidłowego działania. Masz możliwość zarządzania
						ustawieniami cookies w swojej przeglądarce.
					</p>
				</div>
				<div className="PolicyPage__box">
					<h2 className="PolicyPage__box__heading">
						Udostępnianie Danych Osobowych
					</h2>
					<p className="PolicyPage__box__description">
						Twoje dane mogą być przekazywane podmiotom współpracującym, np.
						firmom hostingowym, dostawcom narzędzi analitycznych (np. Google
						Analytics) czy operatorom płatności. Nie sprzedajemy Twoich danych.
					</p>
				</div>
				<div className="PolicyPage__box">
					<h2 className="PolicyPage__box__heading">Prawa Użytkownika</h2>
					<p className="PolicyPage__box__description">
						Masz prawo do: dostępu do swoich danych, ich sprostowania, usunięcia
						(„prawo do bycia zapomnianym”), ograniczenia przetwarzania,
						przenoszenia danych, wniesienia sprzeciwu wobec przetwarzania,
						cofnięcia zgody na przetwarzanie w dowolnym momencie.
						<br />
						Aby skorzystać ze swoich praw, skontaktuj się z nami pod adresem
						gajewwwski@gmail.com.
					</p>
				</div>
				<div className="PolicyPage__box">
					<h2 className="PolicyPage__box__heading">
						Okres Przechowywania Danych
					</h2>
					<p className="PolicyPage__box__description">
						Dane przechowujemy przez okres niezbędny do realizacji celów
						przetwarzania lub do momentu cofnięcia zgody przez użytkownika.
					</p>
				</div>
				<div className="PolicyPage__box">
					<h2 className="PolicyPage__box__heading">
						Zmiany w Polityce Prywatności
					</h2>
					<p className="PolicyPage__box__description">
						Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce
						Prywatności. Aktualna wersja będzie dostępna na Stronie.
					</p>
				</div>
			</div>
		</div>
	);
};

export default PolicyPage;
