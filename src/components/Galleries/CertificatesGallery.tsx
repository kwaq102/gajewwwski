import LightGallery from "lightgallery/react";
import { certificatesList } from "../../ts/certificatesList";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

const CertificatesGallery = () => {
	const gallery = certificatesList.map((el, i) => (
		<a href={el.img}>
			<img src={el.img} alt={el.title} className="certificate__img" />
		</a>
	));

	return <LightGallery speed={500}>{gallery}</LightGallery>;
};

export default CertificatesGallery;
