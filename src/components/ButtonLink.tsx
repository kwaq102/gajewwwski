import { NavLink } from "react-router-dom";

interface Props {
	textBtn: string;
	href: string;
}

const ButtonLink = ({ textBtn, href }: Props) => {
	return (
		<NavLink to={href} className="btn">
			{textBtn}
		</NavLink>
	);
};

export default ButtonLink;
