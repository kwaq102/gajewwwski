type QualityProps = {
	size: string;
};

const Quality = ({ size }: QualityProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 48 48"
		color="red"
	>
		<mask id="ipTFileQualityOne0">
			<g
				fill="none"
				stroke="#fff"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="4"
			>
				<path d="M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12" />
				<path fill="#555" d="M28.2 30h9.6l3.2 4.118L33 44l-8-9.882L28.2 30Z" />
				<path d="M30 4v10h10" />
			</g>
		</mask>
		<path
			fill="currentColor"
			d="M0 0h48v48H0z"
			mask="url(#ipTFileQualityOne0)"
		/>
	</svg>
);

export default Quality;