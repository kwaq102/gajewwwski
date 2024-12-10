import { Link } from "react-router-dom";
import LinkIcon from "../SVG/LinkIcon";
import { useState } from "react";

interface Props {
	title: string;
	description: string;
	link: string;
	img: string;
}

const CardPortfolio = ({ title, description, link, img }: Props) => {
	const bg = `url(${img})`;

	return (
		<div className="portfolio__element" style={{ backgroundImage: bg }}>
			<div className="content">
				<h5>{title}</h5>
				<p>
					{description}
					<Link to={link}>
						<LinkIcon size="24" />
					</Link>
				</p>
			</div>
			<div className="bg"></div>
		</div>
	);
};

export default CardPortfolio;
