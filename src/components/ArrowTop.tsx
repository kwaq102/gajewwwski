import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleArrow } from "../redux/features/arrowSlice";
import { RootState } from "../redux/store/store";
import { scrollToTop } from "../ts/scrollTop";

const ArrowTop = () => {
	const isVisible = useSelector(
		(state: RootState) => state.arrow.isVisibleArrow
	);

	const dispatch = useDispatch();

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 200) {
				dispatch(handleArrow(true));
			} else {
				dispatch(handleArrow(false));
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [dispatch]);

	return (
		<>
			{isVisible && (
				<div className="arrow-top" onClick={scrollToTop}>
					<div className="arrow-top__box">
						<i className="fa fa-angle-up"></i>
					</div>
				</div>
			)}
		</>
	);
};

export default ArrowTop;
