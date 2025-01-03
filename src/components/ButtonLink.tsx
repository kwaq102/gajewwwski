import { Link } from "react-router-dom";
import { scrollToTop, scrollToTopSmooth } from "../ts/scrollTop";

interface Props {
	textBtn: string;
	href: string;
	nameClass?: string;
	smooth?: boolean;
}

const ButtonLink = ({ textBtn, href, nameClass, smooth = false }: Props) => {
	const scrollTop = smooth ? scrollToTopSmooth : scrollToTop;

	return (
		<Link to={href} className={`btn ${nameClass}`} onClick={scrollTop}>
			{textBtn}
		</Link>
	);
};

export default ButtonLink;
