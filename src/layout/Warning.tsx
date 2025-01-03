type WarningOctagonDuotoneProps = {
	size: string;
};

const Warning = ({ size }: WarningOctagonDuotoneProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 256 256"
	>
		<g fill="currentColor">
			<path
				d="M224 91.55v72.9a8 8 0 0 1-2.34 5.66l-51.55 51.55a8 8 0 0 1-5.66 2.34h-72.9a8 8 0 0 1-5.66-2.34l-51.55-51.55a8 8 0 0 1-2.34-5.66v-72.9a8 8 0 0 1 2.34-5.66l51.55-51.55A8 8 0 0 1 91.55 32h72.9a8 8 0 0 1 5.66 2.34l51.55 51.55a8 8 0 0 1 2.34 5.66Z"
				opacity=".2"
			/>
			<path d="M120 136V80a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0Zm112-44.45v72.9a15.86 15.86 0 0 1-4.69 11.31l-51.55 51.55a15.86 15.86 0 0 1-11.31 4.69h-72.9a15.86 15.86 0 0 1-11.31-4.69l-51.55-51.55A15.86 15.86 0 0 1 24 164.45v-72.9a15.86 15.86 0 0 1 4.69-11.31l51.55-51.55A15.86 15.86 0 0 1 91.55 24h72.9a15.86 15.86 0 0 1 11.31 4.69l51.55 51.55A15.86 15.86 0 0 1 232 91.55Zm-16 0L164.45 40h-72.9L40 91.55v72.9L91.55 216h72.9L216 164.45ZM128 160a12 12 0 1 0 12 12a12 12 0 0 0-12-12Z" />
		</g>
	</svg>
);

export default Warning;
