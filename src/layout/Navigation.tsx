import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navList } from "../ts/navigationList";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import { useDispatch } from "react-redux";
import { hiddenMenu, oppositeMenu } from "../redux/features/menuSlice";

const Navigation = () => {
	const [bgNav, setBgNav] = useState(false);
	const menu = useSelector((state: RootState) => state.menu.value);
	const dispatch = useDispatch();

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
		});
	};

	const navigation = navList.map(el => (
		<li key={el.navName} className="main-nav__item">
			<NavLink
				to={el.path}
				end={el.end}
				className="main-nav__link"
				onClick={() => {
					dispatch(hiddenMenu());
					scrollToTop();
				}}
			>
				{el.navName}
			</NavLink>
		</li>
	));

	const handleScroll = () => {
		if (window.scrollY > 80) {
			setBgNav(true);
		} else {
			setBgNav(false);
		}
	};

	window.addEventListener("scroll", handleScroll);

	return (
		<nav className={`main-nav`}>
			<div className={`main-nav__wrapper ${bgNav && "nav-bg"}`}>
				<div className="main-nav__logo">
					<NavLink
						to="/"
						onClick={() => {
							dispatch(hiddenMenu());
							scrollToTop();
						}}
						className={`${bgNav && "logo-white"}`}
					>
						gajewwwski<span>.net</span>
					</NavLink>
				</div>
				<ul className={`main-nav__list ${menu && "show-nav"}`}>{navigation}</ul>
				<div
					className={`main-nav__btn ${menu && "open"}`}
					onClick={() => {
						dispatch(oppositeMenu(menu));
					}}
				>
					<div className="main-nav__hamburger"></div>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
