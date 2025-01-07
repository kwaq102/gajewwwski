import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import cer1 from "../../img/Certificates/cer1.jpg";
import cer2 from "../../img/Certificates/cer2.jpg";
import cer3 from "../../img/Certificates/cer3.jpg";
import cer4 from "../../img/Certificates/cer4.jpg";
import cer5 from "../../img/Certificates/cer5.jpg";
import cer6 from "../../img/Certificates/cer6.jpg";

const CertificatesGallery = () => {
	return (
		<LightGallery speed={500}>
			<a href={cer1}>
				<img
					src={cer1}
					alt="Zaawansowane projekty w CSS i JavaScript"
					className="certificate__img"
				/>
			</a>
			<a href={cer2}>
				<img
					src={cer2}
					alt="Front-end zaawansowany"
					className="certificate__img"
				/>
			</a>
			<a href={cer3}>
				<img
					src={cer3}
					alt="Programowanie w JavaScript"
					className="certificate__img"
				/>
			</a>
			<a href={cer4}>
				<img
					src={cer4}
					alt="Wprowadzenie do Git i GitHub"
					className="certificate__img"
				/>
			</a>
			<a href={cer5}>
				<img src={cer5} alt="React od podstaw" className="certificate__img" />
			</a>
			<a href={cer6}>
				<img
					src={cer6}
					alt="Web developer od podstaw"
					className="certificate__img"
				/>
			</a>
		</LightGallery>
	);
};

export default CertificatesGallery;
