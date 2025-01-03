import Success from "../SVG/Success";
import Warning from "../layout/Warning";

interface Props {
	success: boolean;
	failed: boolean;
}

const FormStatus = ({ failed, success }: Props) => {
	return (
		<div className="formStatus__wrapper">
			<div
				className={`success-info 
					${success && "success-info__success"} 
					${failed && "success-info__failed"}`}
			>
				{success && (
					<>
						<Success size="200" />
						<p>
							Twoja wiadomość została wysłana. Odpowiem najszybciej jak to
							możliwe. :)
						</p>
					</>
				)}
				{failed && (
					<>
						<Warning size="200" />
						<p>Coś poszło nie tak... spróbuj ponownie.</p>
					</>
				)}
			</div>
		</div>
	);
};

export default FormStatus;
