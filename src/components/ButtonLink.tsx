import { Link } from "react-router-dom";

interface Props {
	textBtn: string;
	href: string;
	nameClass?: string;
}

const ButtonLink = ({ textBtn, href, nameClass }: Props) => {
	return (
		<Link to={href} className={`btn ${nameClass}`}>
			{textBtn}
		</Link>
	);
};

export default ButtonLink;
