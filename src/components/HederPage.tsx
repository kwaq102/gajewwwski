import { Link } from "react-router-dom";

interface Props {
	title: string;
	description: string;
	photo?: string;
}

const HeaderPage = ({ title, description, photo }: Props) => {
	return (
		<header className="HeaderPage">
			<div className="HeaderPage__wrapper">
				<h1 className="HeaderPage__title">{title}</h1>
				<p className="HeaderPage__short-description">{description}</p>
				<nav className="HeaderPage__page-nav">
					<ul className="HeaderPage__page-nav__list">
						<li className="HeaderPage__page-nav__item">
							<Link to="/" className="HeaderPage__page-nav__link">
								Home
							</Link>
						</li>
						<li className="HeaderPage__page-nav__item">
							<span>{title}</span>
						</li>
					</ul>
				</nav>
				{photo && <img src={photo} alt="" className="HeaderPage__photo" />}
			</div>
			<div className="HeaderPage__bg"></div>
		</header>
	);
};

export default HeaderPage;
