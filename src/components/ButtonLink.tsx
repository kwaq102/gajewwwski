interface Props {
	textBtn: string;
	href: string;
}

const ButtonLink = ({ textBtn, href }: Props) => {
	return (
		<a href={href} className="btn">
			{textBtn}
		</a>
	);
};

export default ButtonLink;
