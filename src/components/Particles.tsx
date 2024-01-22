import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

const ParticlesComponent = () => {
	// TODO Tutaj zrobić jakis hook, który zareaguje na szerokość okna przeglądarki i ustawi liczbę kropek

	// TODO ogarnnąć abyt tylko działało na headerze a nie na całej stronie

	const options = useMemo(() => {
		return {
			background: {
				color: "transparent",
			},
			fullScreen: {
				enable: true,
				zIndex: 1,
			},
			interactivity: {
				events: {
					onClick: {
						enable: true,
						mode: "push",
					},
					onHover: {
						enable: true,
						mode: "repulse",
					},
					resize: true,
				},
				modes: {
					push: {
						quantity: 1,
					},
					repulse: {
						distance: 100,
					},
				},
			},
			particles: {
				links: {
					enable: true,
					distance: 100,
				},
				move: {
					enable: true,
					speed: { min: 1, max: 3 },
				},
				opacity: {
					value: { min: 0.5, max: 0.7 },
				},
				size: {
					value: { min: 1, max: 3 },
				},
				number: {
					value: 30,
				},
			},
		};
	}, []);

	const particlesInit = useCallback(async (engine: Engine) => {
		await loadSlim(engine);
	}, []);

	return <Particles init={particlesInit} options={options} />;
};

export default ParticlesComponent;
