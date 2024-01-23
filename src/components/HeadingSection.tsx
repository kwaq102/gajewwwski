import React from "react";

interface Props {
	title: string;
	nameClass: string;
}

const HeadingSection = ({ title, nameClass }: Props) => {
	return <h2 className={nameClass}>{title}</h2>;
};

export default HeadingSection;
