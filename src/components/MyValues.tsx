import { ReactNode } from "react";

interface MyValuesProps {
	title: string;
	description: string;
	children: ReactNode;
}

const MyValues = ({ children, description, title }: MyValuesProps) => {
	return (
		<li className="about__values__list-item">
			{children}
			<h3 className="about__values__list-item__heading heading-h3">{title}</h3>
			<p className="about__values__list-item__description">{description}</p>
		</li>
	);
};

export default MyValues;
