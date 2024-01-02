import React, { useState, useEffect, useLayoutEffect } from "react";

const IntervalWithBreak = () => {
	const [counter, setCounter] = useState(0);

	useLayoutEffect(() => {
		const intervalId = setInterval(() => {
			// Tutaj umieść kod funkcji, którą chcesz wykonywać w interwale
			console.log(`Aktualny stan licznika: ${counter}`);

			setCounter(prevCounter => prevCounter + 1);

			// Zatrzymaj interwał po 5 sekundach
			if (counter === 5) {
				clearInterval(intervalId);
				console.log("Interwał został zatrzymany na 5 sekund.");

				// Po przerwie 5 sekund, wznowienie interwału
				setTimeout(() => {
					const newIntervalId = setInterval(() => {
						console.log(`Aktualny stan licznika po przerwie: ${counter}`);
						setCounter(prevCounter => prevCounter + 1);
					}, 5000);

					// Opcjonalnie można zapisać nowy identyfikator interwału w stanie
					// setNewIntervalId(newIntervalId);
				}, 5000);
			}
		}, 1000);

		// Opcjonalny cleanup
		return () => {
			clearInterval(intervalId);
		};
	}, [counter]); // Zależność counter spowoduje uruchomienie useEffect po każdej zmianie counter

	return <div>Aktualny stan licznika: {counter}</div>;
};

export default IntervalWithBreak;
