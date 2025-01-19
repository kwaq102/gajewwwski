interface Props {
	title: string;
	nameClass: string;
}

const HeadingSection = ({ title, nameClass }: Props) => {
	return <h2 className={`heading-section ${nameClass}`}>{title}</h2>;
};

export default HeadingSection;
