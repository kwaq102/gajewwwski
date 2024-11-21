interface Props {
	title: string;
	description: string;
}

const TimelineElement = ({ title, description }: Props) => {
	return (
		<div className="timelineElement__box">
			<h3 className="timelineElement__heading">{title}</h3>
			<p className="timelineElement__description">{description}</p>
		</div>
	);
};

export default TimelineElement;
